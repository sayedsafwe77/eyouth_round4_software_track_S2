// 1. Setup Theme Toggle Logic
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. The JS Component that needs manual updating
const visualizer = document.getElementById("data-visualizer");

function updateComponentColors(isDark) {
  console.log(
    `Re-rendering JS component for ${isDark ? "Dark" : "Light"} mode...`
  );
  // In a real app, this is where you'd run myChart.update()
  visualizer.style.fontWeight = "bold";
  visualizer.innerText = isDark
    ? "DARK MODE ACTIVE (JS)"
    : "LIGHT MODE ACTIVE (JS)";
}

// 3. Create the MutationObserver
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      const isDark = document.body.classList.contains("dark-mode");
      updateComponentColors(isDark);
    }
  });
});

// 4. Start watching the <body> for attribute changes
observer.observe(document.body, {
  attributes: true, // We only care about attribute changes
});
