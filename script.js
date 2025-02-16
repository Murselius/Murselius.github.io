document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const toggleBtn = document.getElementById("toggle-btn");

    toggleBtn.addEventListener("click", function() {
        if (menu.classList.contains("menu-open")) {
            menu.classList.remove("menu-open");
        } else {
            menu.classList.add("menu-open");
        }
    });
});