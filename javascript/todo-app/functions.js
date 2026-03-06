// var name = "sameh";
// var employer = {
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
// employer.getName().printName();

// var employer2 = {
//   id: 1,
//   name: "ahmed mohamed",
// };
// var printName = employer.getName.bind(employer2);

// printName();

// var ob = {
//   name: "moatez",
//   event: () => {
//     document.querySelector(".parent").addEventListener("click", (event) => {
//       console.log(this, event.target);
//     });
//   },
// };
// ob.event();
// Array function push pop unshift shift slice splice forEach map filter reduce find findIndex some every includes indexOf lastIndexOf join reverse sort concat flat flatMap fill from of entries keys values
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.splice(-1, 0, "sayed", "ahmed", "samed", "moatez", "mohamed");
// var el = arr.splice(3, 3);
// console.log(arr, el);

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 != 0) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);
// arr = arr.filter((element) => element % 2 === 0);

var employers = [
  {
    id: 1,
    name: "sayed",
    salary: 1000,
  },
  {
    id: 2,
    name: "ahmed",
    salary: 2000,
  },
  {
    id: 3,
    name: "moatez",
    salary: 3000,
  },
  {
    id: 4,
    name: "mohamed",
    salary: 4000,
  },
];
// for (const element of employers) {
//   element.salary *= 1.2;
// }
// console.log(employers);
// employers.map((employer) => (employer.salary *= 1.2));
// console.log(employers);
const leads = [
  { id: 1, name: "Alice", utm_campaign: "Summer_Sale" },
  { id: 3, name: "Charlie", utm_campaign: "Summer_Sale" },
  { id: 2, name: "Bob", utm_campaign: "Newsletter" },
  { id: 4, name: "David", utm_campaign: "Google_Ads" },
];

const groupedByCampaign = leads.reduce((accumulator, currentLead) => {
  if (accumulator[currentLead.utm_campaign]) {
    accumulator[currentLead.utm_campaign].push(currentLead);
  } else {
    accumulator[currentLead.utm_campaign] = [currentLead];
  }
  return accumulator;
}, {});
function addCampaignsTagsToDom(campaigns) {
  var campaignList = "";
  for (const campaign of campaigns) {
    campaignList += `<li class="campaign">${campaign}</li>`;
  }
  document.querySelector(".campaigns").innerHTML = campaignList;
  document.querySelectorAll(".campaign").forEach((element) => {
    element.addEventListener("click", (event) => {
      insertLeadsIntoDom(event.target.textContent);
    });
  });
}
function insertLeadsIntoDom(campaign) {
  var leadsList = "";
  for (const element of groupedByCampaign[campaign]) {
    leadsList += `<h3 class="lead">${element.name}</h3>`;
  }
  document.querySelector(".leads").innerHTML = leadsList;
}
addCampaignsTagsToDom(Object.keys(groupedByCampaign));

// Array function push pop unshift shift slice splice forEach map filter reduce find findIndex some every includes indexOf lastIndexOf join reverse sort concat flat flatMap fill from of entries keys values

// var employers = [
//   {
//     id: 1,
//     name: "sayed",
//     salary: 1000,
//   },
//   {
//     id: 2,
//     name: "ahmed",
//     salary: 2000,
//   },
// ];
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // Create an Iterable
// const list = fruits.keys();

// // List the Keys
// let text = "";
// for (let x of list) {
//   text += x + "<br>";
// }
// console.log(text);

// 0 => Banana 1 => Orange 2 => Apple 3=> Mango
// console.log(text);

// const numbers = [1, 2, 3, 4];

// const result = numbers.flatMap((n) => (n % 2 === 0 ? [n * 2] : []));

// console.log(result);

// if (arr.every((el) => !isNaN(el))) {
//   console.log(arr.reduce((a, b) => +a + +b));
// } else {
//   console.log("there is an element not a number");
// }
// let text = "Hello world!";
// let result = text.substring(0, 5);
// console.log(result, text);

// Count Word Occurrences
// Find the Longest Word
// Group Numbers (Even / Odd)
// Word Counter (split + reduce)
// Build Table from Data (map)
// Image Gallery Lazy Loader

var arr = [1, 2, 3, 4];
var arr2 = Array.from(arr);
arr[0] = "sayed";
console.log(arr2);
