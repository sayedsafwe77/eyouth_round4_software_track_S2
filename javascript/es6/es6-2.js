import { printModule } from "./module2.js";
function greeting() {
  console.log("welcome user");
}

function printMassage() {
  console.log("hello guest");
}

const user = {
  id: 1,
  name: "sayed",
  gender: "male",
};

printModule();
export default {
  greeting,
  printMassage,
  user,
};
