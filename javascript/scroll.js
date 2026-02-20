const sections = document.querySelectorAll(".sec");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((sec) => {
    const top = sec.offsetTop - 70;
    if (scrollY >= top) current = sec.id;
  });

  links.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current
    );
  });
});
