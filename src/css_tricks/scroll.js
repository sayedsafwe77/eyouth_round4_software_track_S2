const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        console.log(entry.target);
      } else {
        entry.target.classList.remove("animated");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const elements = document.querySelectorAll(".todo");
elements.forEach((element) => {
  observer.observe(element);
});
