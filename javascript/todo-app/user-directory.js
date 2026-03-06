const users = [
  { name: "Ahmed Hassan", age: 28, city: "Cairo" },
  { name: "Sara Mohamed", age: 24, city: "Alexandria" },
  { name: "John Smith", age: 32, city: "London" },
  { name: "Ali Mahmoud", age: 29, city: "Giza" },
  { name: "Mona Ali", age: 26, city: "Dubai" },
];

const container = document.getElementById("users");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const count = document.getElementById("count");

let filteredUsers = Array.from(users);

function highlight(text, keyword) {
  if (!keyword) return text;
  const regex = new RegExp(`(${keyword})`, "gi");
  return text.replace(regex, '<span class="highlight">$1</span>');
}

function render(data) {
  container.innerHTML = data.map(createUser).join("");

  count.textContent = `Total users: ${data.length}`;
}
function createUser(user) {
  return `
    <div class="user">
        <strong>${highlight(user.name, searchInput.value)}</strong>
        <p>Age: ${user.age}</p>
        <p>City: ${user.city}</p>
    </div>
    `;
}
render(users);

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(value) ||
      user.city.toLowerCase().includes(value)
  );

  applySort();
});

sortSelect.addEventListener("change", applySort);

function applySort() {
  const sortValue = sortSelect.value;

  let sorted = Array.from(filteredUsers);
  if (sortValue === "name") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortValue === "age") {
    sorted.sort((a, b) => a.age - b.age);
  }

  render(sorted);
}
