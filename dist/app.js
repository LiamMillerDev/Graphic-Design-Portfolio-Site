"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gsap_1 = require("gsap");
const ScrollTrigger_1 = require("gsap/ScrollTrigger");
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger);
document.addEventListener("DOMContentLoaded", function () {
    const icon1 = document.getElementById("icon1");
    const icon2 = document.getElementById("icon2");
    const icon3 = document.getElementById("icon3");
    const menuIcon = document.getElementById("menuIcon");
    const menuOptions = document.getElementById("menuOptions");
    const overlay = document.getElementById("overlay");
    if (icon1 && icon2 && icon3 && menuIcon && menuOptions && overlay) {
        menuIcon.addEventListener("click", () => {
            icon1.classList.toggle("a");
            icon2.classList.toggle("c");
            icon3.classList.toggle("b");
            menuOptions.classList.toggle("show");
            overlay.classList.toggle("slide");
        });
    }
});
