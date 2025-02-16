document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const toggleBtn = document.getElementById("toggle-btn");

    toggleBtn.addEventListener("click", function() {
        // Toggle menu open class
        menu.classList.toggle("menu-open");

        // Move button when menu opens or closes
        if (menu.classList.contains("menu-open")) {
            toggleBtn.style.left = "260px"; // Move to menu's right edge
            toggleBtn.innerHTML = "&larr;"; // Change arrow to left
        } else {
            toggleBtn.style.left = "10px"; // Move back to screen edge
            toggleBtn.innerHTML = "&rarr;"; // Change arrow to right
        }
    });
});