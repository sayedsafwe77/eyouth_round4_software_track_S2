// var buttons = document.querySelectorAll(".btn");
// for (var btn of buttons) {
//   btn.addEventListener("mouseup", handleMenuEvent);
// }
// document.body.addEventListener("click", hideMenu);

// mouse events click dblclick contextmenu
// keyboard events keydown keyup input
function showList() {
  var list = document.querySelector(".list");
  list.classList.remove("disabled");
}
function handleMenuEvent(event) {
  event.preventDefault();
  event.target.textContent++;
  showList();
}
function hideMenu() {
  var list = document.querySelector(".list");
  list.classList.add("disabled");
  console.log("hide event");
}
var usernameInput = document.querySelector(".usernameInput");
usernameInput.addEventListener("blur", handleInputEvent);
function handleInputEvent(event) {
  console.log("event happening");

  //   document.querySelector(".output").textContent = event.target.value;
}

// var grandparent = document.querySelector(".grandparent");
// var parent = document.querySelector(".parent");
// var child = document.querySelector(".child");
// document.body.addEventListener("click", handleBodyClick, true);
// grandparent.addEventListener("click", handleGrandParentClick, true);
// parent.addEventListener("click", handleParentClick, true);
// child.addEventListener("click", handleChildParentClick, true);
// function handleParentClick() {
//   console.log("parent clicked");
// }
// function handleGrandParentClick() {
//   console.log("grandparent clicked");
// }
// function handleChildParentClick() {
//   console.log("child clicked");
// }
// function handleBodyClick() {
//   console.log("body clicked");
// }
// document.addEventListener("error", addFallbackImage, true);
// var images = document.querySelectorAll("img");
// for (var image of images) {
//   image.addEventListener("error", handleError);
// }
// function addFallbackImage(event) {
//   if (event.target.tagName === "IMG") {
//     event.target.src = "../images/flower_2.jpg";
//   }
//   console.log("document listener");
// }
// function handleError() {
//   console.log("image listener");
// }
// document.querySelector(".usernameInput").addEventListener("input", (event) => {
//   console.log("event happening");
//   document.querySelector(".output").textContent = event.target.value;
// });

// var timer_count = 5;
// var intervalId = setInterval(() => {
//   console.log(timer_count);
//   timer_count--;
//   if (timer_count === 0) {
//     clearInterval(intervalId);
//   }
// }, 1000);
