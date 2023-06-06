import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swiper from "swiper";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const menuImage = document.getElementById("menuImage") as HTMLImageElement;
  const menuOptions = document.getElementById("menuOptions");
  const overlay = document.getElementById("overlay");

  menuImage?.addEventListener("click", () => {
    if (menuOptions && overlay) {
      if (menuOptions.classList.contains("show")) {
        gsap.to(menuOptions, { duration: 0.5, width: "0", ease: "power2.out" });
        gsap.to(overlay, {
          duration: 0.5,
          width: "0",
          height: "0",
          ease: "power2.out",
        });
        menuImage.src = "/assets/burger-menu.png";
        menuOptions.classList.remove("show");
      } else {
        gsap.to(menuOptions, {
          duration: 0.5,
          width: "100%",
          maxWidth: "500px",
          ease: "power2.out",
        });
        gsap.to(overlay, {
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
