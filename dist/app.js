"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gsap_1 = require("gsap");
const ScrollTrigger_1 = require("gsap/ScrollTrigger");
const swiper_1 = __importStar(require("swiper"));
require("swiper/swiper-bundle.css");
swiper_1.default.use([swiper_1.Navigation, swiper_1.Pagination, swiper_1.Autoplay]);
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
    const swiper = new swiper_1.default(".swiper-container", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
});
