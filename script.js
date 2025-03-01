document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const openBtn = document.getElementById("open-btn");
    let isOpen = false; // Corrected "var" to "let" for modern JavaScript

    openBtn.addEventListener("click", function() {
        if (!isOpen) {
            menu.style.left = "0";
            openBtn.style.left = "270px"; // Move button with menu
            openBtn.style.backgroundImage = url(nuoli_vasen.png); // Change arrow to left
        } else {
            menu.style.left = "-250px";
            openBtn.style.left = "20px"; // Move button back
            openBtn.style.backgroundImage = url(nuoli_oikea.png); // Change arrow to right
        }
        isOpen = !isOpen; // Toggle state
    });
});