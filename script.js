document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const openBtn = document.getElementById("open-btn");
    const closeBtn = document.getElementById("close-btn");

    openBtn.addEventListener("click", function() {
        menu.style.left = "0";
        openBtn.style.left = "250px";
    });

    closeBtn.addEventListener("click", function() {
        menu.style.left = "-250px";
        openBtn.style.left = "0";
    });
});