document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const openBtn = document.getElementById("open-btn");
    const closeBtn = document.getElementById("close-btn");
    var isOpen = false;

    openBtn.addEventListener("click", function() {
        if (isOpen==false) {
            menu.style.left = "0";
            openBtn.style.left = "250px";
            isOpen = true;
        }
        else {
            menu.style.left = "-250px";
            openBtn.style.left = "0";
            isOpen = false;
        }

    });
});