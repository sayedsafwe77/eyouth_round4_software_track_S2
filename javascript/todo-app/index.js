var limit = 15;
document.querySelector(".get-todo").addEventListener("click", () => {
  var skip = document.querySelector(".skip").value;
  limit = document.querySelector(".limit").value;
  handleTodosDisplay(skip, limit);
});
async function handleTodosDisplay(skip, limit, createPagination = true) {
  var data = await fetchingTodos(skip, limit);

  var list_items = createTodoItems(data.todos);
  insertTodosIntoDom(list_items);
  listenForTodoStatusChange();
  if (!createPagination) return;
  /**** start paginate with links******** */
  // createPaginationLinks(data);
  // listenForPaginationLinks();
  /**** end paginate with links******** */
  /**** start paginate with scroll******** */
  /**** end paginate with scroll******** */
  paginationWithScroll();
}

async function fetchingTodos(skip, limit) {
  var response = await fetch(
    `https://dummyjson.com/todos?skip=${skip}&limit=${limit}`
  );
  return await response.json();
}
function createTodoItems(todos) {
  var list_items = "";
  for (let singleTodo of todos) {
    list_items += `<li class="todo-item" data-todo-id=${singleTodo.id}>${
      singleTodo.todo
    } <input type="checkbox" class="todo-status" ${
      checkTodoStatus(singleTodo) ? "checked" : ""
    } /> </li>`;
  }
  return list_items;
}

function checkTodoStatus(todo) {
  // check if this todo exist in localstorage so it will read the completed from it
  var todos = JSON.parse(localStorage.getItem("todos")) ?? [];
  for (var storageTodo of todos) {
    if (storageTodo.id == todo.id) {
      return storageTodo.completed;
    }
  }
  return todo.completed;
  // else if not exist in localstorage it will return checked from backend
}
function insertTodosIntoDom(list_items) {
  document.querySelector(".todos-list").innerHTML = list_items;
}
function triggerNotification() {
  document.querySelector(".notification").classList.remove("hidden");
  setTimeout(() => {
    document.querySelector(".notification").classList.add("hidden");
  }, 1000);
}

function listenForTodoStatusChange() {
  var todoStatuses = document.querySelectorAll(".todo-status");
  for (var todoStatus of todoStatuses) {
    todoStatus.addEventListener("change", changeHandler);
    function changeHandler(event) {
      var status = event.target.checked;
      var todoId = event.target.parentElement.dataset.todoId;
      updateTodoStatus(todoId, status);
    }
  }
}

async function updateTodoStatus(todoId, status) {
  var response = await fetch(`https://dummyjson.com/todos/${todoId}`, {
    method: "PUT" /* or PATCH */,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      completed: status,
    }),
  });
  var data = await response.json();
  saveUpdateOnStorage(data);
}

function saveUpdateOnStorage(todo) {
  // read data from localstorage
  var todos = JSON.parse(localStorage.getItem("todos")) ?? [];
  var isExist = false;
  for (const storageTodo of todos) {
    if (storageTodo.id == todo.id) {
      storageTodo.completed = todo.completed;
      isExist = true;
    }
  }

  if (!isExist) {
    todos.push(todo);
  }

  localStorage.setItem("todos", JSON.stringify(todos));
  // add new todo to the data returned from localstorage
  // save change localstorage
}

function createPaginationLinks(data) {
  var noOfPages = Math.ceil(data.total / data.limit);
  var paginationLinks = "";
  for (let i = 1; i <= noOfPages; i++) {
    paginationLinks += `<a class="page-link ${
      i == 1 ? "active" : ""
    }" data-skip=${(i - 1) * data.limit}>${i}</a>`;
  }
  document.querySelector(".todo-links").innerHTML = paginationLinks;
}

function listenForPaginationLinks() {
  var links = document.querySelectorAll(".page-link");
  links.forEach((link) =>
    link.addEventListener("click", (event) => {
      var oldLink = event.target.parentElement.querySelector(".active");
      if (oldLink) {
        oldLink.classList.remove("active");
      }
      event.target.classList.add("active");
      handleTodosDisplay(event.target.dataset.skip, limit, false);
    })
  );
}
// window.addEventListener("scroll", () => {
//   console.log("scrolling...");
// });

function paginationWithScroll() {
  var observer = new IntersectionObserver(
    async (entries) => {
      console.log("observing...");

      if (entries[0].isIntersecting) {
        observer.unobserve(entries[0].target);
        var data = await fetchingTodos(entries[0].target.dataset.todoId, limit);
        var list_items = createTodoItems(data.todos);
        document.querySelector(".todos-list").innerHTML += list_items;
        listenForTodoStatusChange();
        if (data.todos[data.todos.length - 1].id >= data.total) return;
        observer.observe(document.querySelector(".todo-item:last-child"));
      }
    },
    {
      // threshold: 1,
      // rootMargin: "-50px",
    }
  );
  observer.observe(document.querySelector(".todo-item:last-child"));
}
// const resize = new ResizeObserver((entries) => {
//   if (entries[0].contentBoxSize[0].inlineSize > 500) {
//     entries[0].target.classList.add("bg-primary");
//   } else {
//     entries[0].target.classList.remove("bg-primary");
//   }
// });
// resize.observe(document.querySelector(".resize-text"));

// const mutation = new MutationObserver((mutations) => {
//   // triggerNotification();
//   console.log(mutations[0].target.getAttribute(mutations[0].attributeName));
// });

// mutation.observe(document.querySelector(".todos-list"), {
//   attributes: true,
//   attributeOldValue: true,
//   attributeFilter: ["data-todo-id"],
// });
// setTimeout(() => {
//   document.querySelector(".todos-list").dataset.todoId = 30;
//   setTimeout(() => {
//     document.querySelector(".todos-list").id = "new-id";
//   }, 1000);
// }, 1000);
