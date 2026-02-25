/**********  start sending requests to backend ****************  */

// function main() {
//   customLog("before timeout");
//   setTimeout(() => {
//     customLog("inside timeout");
//   }, 0);
//   customLog("after timeout");
// }

// function customLog(message) {
//   console.log(message);
//   return "welcome";
// }

document.querySelector(".get-todo").addEventListener("click", () => {
  var skip = document.querySelector(".skip").value;
  var limit = document.querySelector(".limit").value;
  handleTodosDisplay(skip, limit);
});
async function handleTodosDisplay(skip, limit) {
  var data = await fetchingTodos(skip, limit);

  var list_items = createTodoItems(data.todos);
  insertTodosIntoDom(list_items);
  listenForTodoStatusChange();
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
    list_items += `<li data-todo-id=${singleTodo.id}>${
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

function listenForTodoStatusChange() {
  var todoStatuses = document.querySelectorAll(".todo-status");
  for (var todoStatus of todoStatuses) {
    todoStatus.addEventListener("change", (event) => {
      var status = event.target.checked;
      var todoId = event.target.parentElement.dataset.todoId;
      updateTodoStatus(todoId, status);
    });
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
/**********   end sending requests to backend ****************  */
