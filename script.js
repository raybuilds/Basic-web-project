// Hidden practice feature
console.log("Basic Web Project loaded successfully");

const toggleButton = document.getElementById("themeToggle");

toggleButton.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark");

    toggleButton.textContent = isDarkMode
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";
});