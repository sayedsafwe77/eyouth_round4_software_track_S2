const list = document.getElementById("list");
let dragged;

list.addEventListener("dragstart", (e) => {
  dragged = e.target;
  e.target.classList.add("dragging");
});

list.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
});

list.addEventListener("dragover", (e) => {
  e.preventDefault();
  const afterElement = getDragAfterElement(list, e.clientY);
  console.log({ afterElement });

  if (afterElement == null) {
    list.appendChild(dragged);
  } else {
    list.insertBefore(dragged, afterElement);
  }
});

function getDragAfterElement(container, y) {
  const items = [...container.querySelectorAll("li:not(.dragging)")];
  return items.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
