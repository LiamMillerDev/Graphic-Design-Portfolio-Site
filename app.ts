import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const menuImage = document.getElementById("menuImage") as HTMLImageElement; // Cast to HTMLImageElement
  const menuOptions = document.getElementById("menuOptions");

  menuImage?.addEventListener("click", () => {
    if (menuOptions) {
      menuOptions.classList.toggle("show");
      // Toggle the image source based on whether the menu is shown or not
      if (menuOptions.classList.contains("show")) {
        // When the menu is open, show the close icon
        if (menuImage) menuImage.src = "/assets/close-menu.png";
      } else {
        // When the menu is closed, show the hamburger icon
        if (menuImage) menuImage.src = "/assets/burger-menu.png";
      }
    }
  });
});
