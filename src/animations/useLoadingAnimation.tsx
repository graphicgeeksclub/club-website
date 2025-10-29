import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const useLoadingAnimation = (setLoading) => {
  useGSAP(() => {
    const loaderText = gsap.utils.toArray<HTMLElement>(".loader-div p");
    const tl = gsap.timeline({
      ease: "power3.inOut",
      onComplete: () => {
        // ✅ Runs when ALL animations in this timeline finish
        console.log("Preloader animation finished!");
        setLoading(false);
      },
    });

    // Animate loader words
    loaderText.forEach((text, indx) => {
      tl.to(text, {
        y: 0,
      });
      if (indx !== loaderText.length - 1) {
        tl.to(text, {
          y: "-2rem",
          delay: 0.5,
        });
      }
    });

    // Animate percentage from 0 → 100
    const counter = { value: 0 };
    gsap.to(counter, {
      value: 100,
      duration: loaderText.length * 1.2,
      ease: "linear",
      onUpdate: () => {
        const el = document.querySelector(".loading-percentage");
        if (el) el.textContent = Math.floor(counter.value) + "%";
      },
    });
  });
};

export default useLoadingAnimation;
