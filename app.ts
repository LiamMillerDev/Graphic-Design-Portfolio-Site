import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Pagination, Autoplay]);
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const icon1 = document.getElementById("icon1") as HTMLElement;
  const icon2 = document.getElementById("icon2") as HTMLElement;
  const icon3 = document.getElementById("icon3") as HTMLElement;
  const menuIcon = document.getElementById("menuIcon") as HTMLElement;
  const menuOptions = document.getElementById("menuOptions") as HTMLElement;
  const overlay = document.getElementById("overlay") as HTMLElement;

  if (icon1 && icon2 && icon3 && menuIcon && menuOptions && overlay) {
    menuIcon.addEventListener("click", () => {
      icon1.classList.toggle("a");
      icon2.classList.toggle("c");
      icon3.classList.toggle("b");
      menuOptions.classList.toggle("show");
      overlay.classList.toggle("slide");
    });
  }

  const swiper = new Swiper(".swiper-container", {
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

  ScrollTrigger.scrollerProxy("#scroll-container", {
    scrollTop(value) {
      const scrollContainer = document.getElementById("scroll-container");
      if (!scrollContainer) {
        console.error("#scroll-container not found");
        return;
      }
      if (arguments.length && typeof value === "number") {
        scrollContainer.scrollTop = value;
      } else {
        return scrollContainer.scrollTop;
      }
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });
});
