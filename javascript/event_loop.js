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
async function getData() {
  var response = await fetch("https://dummyjson.com/todos");
  var data = await response.json();
  console.log(data);
}
getData();
/**********   end sending requests to backend ****************  */
