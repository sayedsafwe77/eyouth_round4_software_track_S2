const images = document.querySelectorAll("img.lazy");

const observer = new IntersectionObserver((entries) => {
  console.log(entries);

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.onload = () => img.classList.add("loaded");
      observer.unobserve(img);
    }
  });
});

images.forEach((img) => observer.observe(img));
