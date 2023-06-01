function toggleMobileMenu() {
    var menu = document.getElementById("mobile-menu");
    var toggleButton = document.getElementById("menu-toggle");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        toggleButton.checked = false;
    } else {
        menu.style.display = "block";
        toggleButton.checked = true;
    }
}
