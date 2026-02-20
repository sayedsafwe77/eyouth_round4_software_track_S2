// let timer;
// window.addEventListener("scroll", () => {
//   clearTimeout(timer);
//   timer = setTimeout(() => {
//     console.log("User stopped scrolling");
//   }, 200);
// });
// window.addEventListener("resize", () => {
//   console.log("Width:", window.innerWidth);
// });
// window.addEventListener("resize", () => {
//   if (window.innerWidth < 768) {
//     console.log("Mobile mode");
//   } else {
//     console.log("Desktop mode");
//   }
// });
// window.addEventListener("beforeunload", (event) => {
//   event.preventDefault();
//   event.returnValue = ""; // Required for Chrome
// });
// window.addEventListener("focus", () => {
//   console.log("User returned to tab");
// });

// window.addEventListener("blur", () => {
//   console.log("User left tab");
// });
// window.addEventListener("online", () => {
//   console.log("Internet restored");
// });

// window.addEventListener("offline", () => {
//   console.log("No internet");
// });

window.addEventListener("scroll", () => {
  document.body.style.backgroundColor = `hsl(${
    window.scrollY % 360
  }, 50%, 50%)`;
});
