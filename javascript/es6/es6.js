// let const

// let a = 10;
// console.log(a);
// var b = 20;
// var c = 30;
// var d = 40;

// let fname = "sayed";
// const arr = [1, 2, 3, 4, 5];
// for (const element of arr) {
//   console.log(element);
// }
// arrow functions

// var add = (a, b) => a + b;
// console.log(add(1, 5));

// var add = function(a, b){
//     return a + b;
// };

// console.log(add(1, 5));
// map ,filter, reduce

// async function getUser() {
//   const response = await fetch("https://dummyjson.com/users/1");
//   const { firstName, lastName } = await response.json();
//   console.log(firstName, lastName);
// }
// getUser();
// const arr = ["ahmed", "mohamed", "sameh", "abanob"];
// for (const [, value] of arr.entries()) {
//   console.log(value);
// }
// function printName({ user_name: name }) {
//   name = name.trim();
//   name = name.replace(/\s+/g, " ");
//   console.log(name);
// }
// const user = {
//   id: 1,
//   user_name: "      sayed          safwet        ",
// };
// printName(user);
// const arr = [10, 30, 50, 20, 70, 90];
// console.log(Math.max(...arr));
// console.log(...arr);

// const arr2 = [...arr];
// arr[0] = 100;
// console.log(arr2);
// function add([...x]) {
//   x[0] = 100;
// }

// add(arr);
// console.log(arr);
// const user_personal_info = {
//   name: "sayed safwet",
//   age: 30,
//   email: "sayed@gmail.com",
//   gpa: 3.5,
// };
// const user_education_info = {
//   faculty: "engineering",
//   degree: "bachelor",
//   post_program: "iti",
// };
// const user_experience_info = {
//   position: "team lead",
//   id: 54233,
//   programming_languages: ["javascript", "python", "java"],
// };

// const user = {
//   ...user_personal_info,
//   ...user_education_info,
//   ...user_experience_info,
// };

// function add(...a) {
//   return a.reduce((x, y) => x + y);
// }
// console.log(Math.max(1, 5, 7, 7, 3, 4, 5, 6, 7, 8, 9));
// function parent() {
//   let x = 10;
//   return () => console.log(x++);
// }
// const child = parent();

// child();
// child();
// child();
// child();
// child();
// child();
// child();
// child();
// child();
// child();
// child();
// child();
// child();
// child();
// child();
// child();

// async function* paginateVehicleMedia(baseUrl, totalPages) {
//   let currentPage = 1;

//   while (currentPage <= totalPages) {
//     console.log(`--- Fetching page ${currentPage} ---`);

//     // Simulate an API call using your structure
//     const response = await fetch(`${baseUrl}&page=${currentPage}`);
//     const { data } = await response.json();

//     // Yield the array of items for this specific page
//     yield data.sections[0].sub_sections;

//     currentPage++;
//   }
// }

// const apiBase =
//   "http://127.0.0.1:8000/api/vehicle-models/11?relations=sections";
// const mediaLoader = paginateVehicleMedia(apiBase, 3);
// // Button click handler for "Load More"
// document.getElementById("loadMoreBtn").addEventListener("click", async () => {
//   // .next() resumes the generator until the next 'yield'
//   const { value, done } = await mediaLoader.next();

//   if (!done) {
//     renderSubSections(value); // Value contains the sub_sections yielded
//   } else {
//     console.log("No more sections to load.");
//     document.getElementById("loadMoreBtn").disabled = true;
//   }
// });

/**
 * Renders an array of sub-sections (e.g., convenience features) to the DOM
 * @param {Array} items - The array of sub-section objects from the API
 */
// function renderSubSections(items) {
//   const gallery = document.getElementById("feature-gallery");

//   // Using Map to transform data into HTML strings
//   const htmlContent = items
//     .map((item) => {
//       // 1. Destructure data for cleaner access
//       const { title, description, media } = item;

//       // 2. Find the correct optimized image (Desktop version)
//       const desktopMedia = media.find(
//         (m) => m.collection_name === "image_desktop"
//       );
//       const imgUrl = desktopMedia ? `${desktopMedia.url}?w=800&q=75` : "";

//       // 3. Return the Template Literal for the card
//       return `
//             <div class="feature-card">
//                 <div class="feature-image">
//                     <img src="${imgUrl}" alt="${title.en}" loading="lazy">
//                 </div>
//                 <div class="feature-content">
//                     <h3>${title.en} <small>${title.ar}</small></h3>
//                     <p>${description.en}</p>
//                 </div>
//             </div>
//         `;
//     })
//     .join(""); // Join array into a single string

//   // 4. Append to gallery (use += to keep previous pages, or = to replace)
//   gallery.innerHTML += htmlContent;
// }
// const user = {
//   id: 1,
//   name: "John Doe",
//   getName: function () {
//     return {
//       name: "sayed safwet",
//       printName: function () {
//         console.log(this.name);
//       },
//     };
//   },
// };
// // console.log("age" in user);
// // delete user.name;
// // console.log(user);

// const userMap = new Map([
//   ["id", 1],
//   ["name", "sayed"],
//   ["age", 30],
// ]);
// userMap.delete("name");
// console.log(userMap);
// userMap.set("fullName", "sayed safwet");
// console.log(userMap.size);
// const todoMap = new Map();
// async function fetchTodo() {
//   const response = await fetch("https://dummyjson.com/todos?limit=5");
//   const { todos } = await response.json();
//   renderTodos(todos);
//   MapElementsToTodos(todos);
//   listenForTodo();
//   // return
// }

// function renderTodos(todos) {
//   document.querySelector(".todo-list").innerHTML = todos
//     .map(
//       (todo) =>
//         `
//     <li class="todo">${todo.todo}</li>
//     `
//     )
//     .join("");
// }

// function MapElementsToTodos(todos) {
//   const elements = document.querySelectorAll(".todo");
//   for (const [index, todo] of todos.entries()) {
//     todoMap.set(elements[index], todo);
//   }
//   console.log(todoMap);
// }
// function listenForTodo() {
//   document.querySelectorAll(".todo").forEach((todo) =>
//     todo.addEventListener("click", (event) => {
//       console.log(todoMap.get(event.target));
//     })
//   );
// }
// fetchTodo();
// 2-api caching
// const todoCache = new Map();
// async function fetchTodo(id) {
//   const url = `https://dummyjson.com/todos/${id}`;
//   if (todoCache.has(url)) {
//     return todoCache.get(url);
//   }

//   console.log("fetching todo from backend");
//   const response = await fetch(url);
//   const todo = await response.json();
//   todoCache.set(url, todo);
//   console.log(todoCache);

//   renderTodo(todo);
// }
// document.querySelector("button").addEventListener("click", () => {
//   fetchTodo(document.querySelector("#todoId").value);
// });

// function renderTodo(todo) {
//   document.querySelector(".todo").textContent = todo.todo;
// }

// time complexity 0(1) 0(1)
// const user = {
//   id: 1,
//   name: "John Doe",
//   password: "123456",
// };
// // Object.freeze(user);
// const userProxy = new Proxy(user, {
//   set(target, key, value) {
//     if (key === "password") return false;
//     if (typeof value === "string") {
//       target[key] = value.trim().toUpperCase();
//       return true;
//     }
//     target[key] = value;
//     return true;
//   },
//   get(target, key) {
//     if (typeof value === "string") {
//       return target[key];
//     }
//     return target[key];
//   },
// });

// userProxy.name = "           sayed safwet            ";
// userProxy.languages = ["javascript", "php", "C"];

// userProxy.password = "mahmoud";

// console.log(userProxy);
// console.log(userProxy);
// const counterProxy = new Proxy(
//   { counter: 0 },
//   {
//     set(target, key, value) {
//       target[key] = value;
//       document.querySelector("button").textContent = value;
//     },
//   }
// );

// document.querySelector("button").addEventListener("click", () => {
//   counterProxy.counter++;
// });

// counterProxy.counter++;

// counterProxy.counter++;

// counterProxy.counter++;

// counterProxy.counter++;

// counterProxy.counter++;

// counterProxy.counter++;
// const todoProxy = new Proxy([], {
//   set(target, key, value) {
//     target[key] = value;
//     document.querySelector(".todos").innerHTML = target
//       .map((todo) => `<li>${todo}</li>`)
//       .join("");
//     return true;
//   },
// });

// document.querySelector("#create-todo").addEventListener("click", () => {
//   const todo = document.querySelector("#todo").value;
//   todoProxy.push(todo);
//   console.log(todoProxy);
// });

// todoProxy.push("study javascript");

// import helpers from "./es6-2.js";

// greeting();
// console.log(user);

// printMassage();
// const arr = ["sayed", "sayed", "ahmed", "ahmed", "mohamed"];
// const arrSet = new Set(arr);
// console.log(arrSet);

// for (const element of arrSet.entries()) {
//   console.log(element);
// }
// const id1 = Symbol("id");
// const id2 = Symbol("id");
// const user1 = {
//   [id1]: 1,
//   [id2]: 2,
// };

// Object.assign(user1, user_education_info);
// const user2 = Object.create({ ...user1 });
// user1.id = 10;
// console.log(isNaN("sayed"));

// function isEqual(a, b) {
//   return Math.abs(a - b) <= Number.EPSILON;
// }
// console.log(isEqual(0.1 + 0.3, 0.3));
/********  Prototype ************ */
// function User(name, email) {
//   this.name = name;
//   this.email = email;
// }
// User.prototype.printInfo = function () {
//   console.log(this);
//   console.log(`user name is ${this.name} and email is ${this.email}`);
// };

// function Admin(...args) {
//   User.apply(this, args);
// }
// Object.assign(Array.prototype, User.prototype);
// Admin.prototype.message = function () {
//   console.log("welcome");
// };
// const user = new Admin("sayed", "sayed@gmail.com");
// console.log(user.message());
// user.printInfo();
// console.log(user);

// Object.prototype.max = function () {
//   console.log("Object class");
//   return Math.max(...this);
// };
// Array.prototype.max = function () {
//   console.log("Array class");
//   return Math.max(...this);
// };
// let arr = [1, 2, 3, 4, 5];
// arr.__proto__.customObject = {
//   firstName: "sameh",
//   max: function () {
//     console.log("variable");
//     return Math.max(...this);
//   },
// };

// console.log(arr.max());

/************ Class *****************/
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.salary = null;
  }
  printInfo() {
    return `user name is ${this.name} and email is ${this.email}`;
  }
}
class Admin extends User {
  constructor(name, email, role) {
    super(name, email);
    this.__role = role;
  }
  printInfo() {
    return `${super.printInfo()} and role is ${this.role}`;
  }
  set role(role) {
    this.__role = role;
  }
  get role() {
    return `role is: ${this.__role}`;
  }
}
// Admin.prototype.message = function () {
//   console.log("welcome");
// };
// const user = new Admin("sayed", "sayed@gmail.com", "admin");
// user.role = "user";
// let x = 2;
// x **= 3;
// const tel = "727235";
// console.log(tel.padEnd(11, "0"));
const ob = {
  id: 1,
  name: "sameh",
};
Object.defineProperty(ob, "gender", {
  writable: true,
  enumerable: true,
  set: function () {
    console.log("set");
  },
  get: function () {
    console.log("get");
  },
});
ob.gender = "female";
console.log(ob.gender);

for (const element in ob) {
  console.log(element);
}
