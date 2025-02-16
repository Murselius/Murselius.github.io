document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const openBtn = document.getElementById("open-btn");
    const closeBtn = document.getElementById("close-btn");

    openBtn.addEventListener("click", function() {
        menu.style.left = "0";
        openBtn.classList.add("menu-open");
    });

    closeBtn.addEventListener("click", function() {
        menu.style.left = "-250px";
        openBtn.classList.remove("menu-open");
    });
});