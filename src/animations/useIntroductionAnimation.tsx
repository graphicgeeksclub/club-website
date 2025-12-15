import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { splitWordsToSpans } from "@/utils/splitWordsToSpans";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useIntroductionAnimation = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".intro-section h2",
      { opacity: 0, scale: 2, y: "1rem" },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".intro-section h2",
          start: "top 50%",
          end: "end end",
        },
      }
    );

    const paragraph = document.querySelector(".intro-section p");
    if (!paragraph) return;

    splitWordsToSpans(paragraph);

    gsap.fromTo(
      ".intro-section span",
      { opacity: 0, y: "1rem" },
      {
        opacity: 1,
        y: 0,
        ease: "power3.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: paragraph,
          start: "top 40%",
          end: "end end",
        },
      }
    );

    const panels = gsap.utils.toArray<HTMLElement>(".intro-card");

    panels.forEach((panel) => {
      const textEls = panel.querySelectorAll("h3, p");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top top",
            end: "+=100%",
            pin: true,
            pinSpacing: false,
          },
        })
        .fromTo(
          panel,
          { opacity: 0, scale: 2 },
          { opacity: 1, scale: 1, ease: "spring(1, 100, 20, 0)" }
        )
        .fromTo(
          textEls,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            ease: "power2.out",
            duration: 0.6,
          },
          "-=0.3"
        );
    });
  });
};

export default useIntroductionAnimation;
