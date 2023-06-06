"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gsap_1 = require("gsap");
const ScrollTrigger_1 = require("gsap/ScrollTrigger");
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger);
document.addEventListener("DOMContentLoaded", function () {
    const menuImage = document.getElementById("menuImage");
    const menuOptions = document.getElementById("menuOptions");
    const overlay = document.getElementById("overlay");
    menuImage === null || menuImage === void 0 ? void 0 : menuImage.addEventListener("click", () => {
        if (menuOptions && overlay) {
            if (menuOptions.classList.contains("show")) {
                gsap_1.gsap.to(menuOptions, { duration: 0.5, width: "0", ease: "power2.out" });
                gsap_1.gsap.to(overlay, {
                    duration: 0.5,
                    width: "0",
                    height: "0",
                    ease: "power2.out",
                });
                menuImage.src = "/assets/burger-menu.png";
                menuOptions.classList.remove("show");
            }
            else {
                gsap_1.gsap.to(menuOptions, {
                    duration: 0.5,
                    width: "100%",
                    maxWidth: "500px",
                    ease: "power2.out",
                });
                gsap_1.gsap.to(overlay, {
                    duration: 0.5,
                    width: "100%",
                    height: "100%",
                    ease: "power2.out",
                });
                menuImage.src = "/assets/close-menu.png";
                menuOptions.classList.add("show");
            }
        }
    });
});
