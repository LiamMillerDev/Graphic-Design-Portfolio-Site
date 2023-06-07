import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Pagination]);
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

  // Initialize Swiper
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true, // Adding loop option
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
    },
  }) as Swiper;

  // Animate cards on hover
  document.querySelectorAll(".about-card").forEach((card: Element) => {
    if (card instanceof HTMLElement) {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.inOut",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    }
  });
});
