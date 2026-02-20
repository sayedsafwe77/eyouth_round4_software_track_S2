// variables
// var name = "sayed safwet";
// var age = 30;
// var email = "sayed@gmail.com";
// var gpa = 3.5;
// var gpa = false;

// var ids = [1, 2, 3, 4, 5, 6];
// var i = 0;

// var employee = {
//   name: "sayed",
//   age: 30,
//   position: "team lead",
//   id: 54233,
//   education: {
//     faculty: "engineering",
//     degree: "bachelor",
//     post_program: "iti",
//   },
//   programming_languages: ["javascript", "python", "java"],
// };

// for (var y of ids) {
//   console.log(y);
// }
// for (var x in employee) {
//   console.log(employee[x]);
// }
// logical operators
// var grade = parseInt(prompt("enter your grade"));
// if (grade >= 50 && grade <= 60) {
//   console.log("passed");
// } else if (grade > 60 && grade <= 75) {
//   console.log("good");
// } else if (grade > 75 && grade <= 85) {
//   console.log("very good");
// } else {
//   console.log("excellent");
// }
// for (; i < 5; ) {
//   console.log(ids[i]);
//   i++;
// }
// "" = false = null = undefined = 0
// var user = {
//     is_blocked: true
// };
// if (!user.is_blocked) {
//   console.log("proccessed with the functions");
// } else {
//   console.log("falsy value");
// }
// alert(title);
// datatypes
// operators
// control statements
// loops
// functions
// var user_name = undefined;
// user_name = user_name || "sayed";
// user_name &&= "sayed";
// if (user_name) {
//   user_name = user_name;
// } else {
//   user_name = "sayed";
// }
// var order = {
//   id: 1,
//   price: 100,
//   vat: 14,
//   status: "pending",
// };
// switch (order.status) {
//   case "pending":
//   case "delivered":
//     console.log("your order is pending");
//     break;
//   case "confirmed":
//     console.log("your order is confirmed");
//     break;
//   case "rejected":
//     console.log("your order is rejected");
//     break;
//   default:
//     console.log("invalid order status");
//     break;
// }

// console.log(user_name);

// var password = "user123";
// var entered_password = "";
// do {
//   entered_password = prompt("enter your password");
//   break;
// } while (entered_password != password);
// console.log("welcome back");
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var search_element = 5;
// for (var i = 0; i < arr.length; i++) {
//   if (arr.length > 10) {
//     console.log("fetching data from backend");
//     continue;
//   }
//   console.log("get data from local storage");
// }

// var num1 = prompt("enter first number");
// var num2 = prompt("enter second number");
// var result = summation(num1, num2);
// console.log(result);
// console.log(document);
function summation(num1, num2) {
  return +num1 + +num2;
}
// listen for button click
var button = document.querySelector(".btn");
button.addEventListener("click", collectInputValues);
function collectInputValues() {
  var input1 = document.querySelector("input:first-child");
  var input2 = document.querySelector("input:nth-child(2)");
  var result = summation(input1.value, input2.value);
  document.querySelector(".result").textContent = result;
}
// select input to read it's values
// calculate inputs summation
// display result in dom
