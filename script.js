// Hidden practice feature
console.log("Basic Web Project loaded successfully");

// Dark mode toggle
const toggleButton = document.getElementById("themeToggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});