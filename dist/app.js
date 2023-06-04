"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const menuImage = document.getElementById("menuImage"); // Cast to HTMLImageElement
    const menuOptions = document.getElementById("menuOptions");
    menuImage === null || menuImage === void 0 ? void 0 : menuImage.addEventListener("click", () => {
        if (menuOptions) {
            menuOptions.classList.toggle("show");
            // Toggle the image source based on whether the menu is shown or not
            if (menuOptions.classList.contains("show")) {
                // When the menu is open, show the close icon
                if (menuImage)
                    menuImage.src = "/assets/close-menu.png";
            }
            else {
                // When the menu is closed, show the hamburger icon
                if (menuImage)
                    menuImage.src = "/assets/burger-menu.png";
            }
        }
    });
});
