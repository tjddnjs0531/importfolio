import { useEffect } from "react";

const useIntersectionFadeIn = () => {
  useEffect(() => {
    const fadeInBoxes = document.querySelectorAll(".fade-in-box");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;

          if (entry.isIntersecting) {
            const delayTime = target.getAttribute("data-delay") || 0;

            if (target.classList.contains("delay")) {
              setTimeout(() => {
                target.classList.add("visible");
              }, delayTime * 1000);
            } else {
              target.classList.add("visible");
            }
          } else {
            target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "50px 0px 50px 0px",
      }
    );

    fadeInBoxes.forEach((box) => observer.observe(box));

    // 언마운트 시 옵저버 해제
    return () => observer.disconnect();
  }, []);
};

export default useIntersectionFadeIn;
