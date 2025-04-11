import { useEffect } from "react";
import { gsap } from "gsap";
import "./FogEffect.scss";

const FogEffect = () => {
  useEffect(() => {
    const fogWrap = document.querySelector("#fogWrap");
    if (!fogWrap) return;

    let currentX = fogWrap.getBoundingClientRect().left;
    let currentY = fogWrap.getBoundingClientRect().top;
    let targetX = 0;
    let targetY = 0;
    let isRender = false;
    const speed = window.innerWidth < 768 ? 2 : 4;

    const handleMouseMove = (event) => {
      isRender = true;
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const animate = () => {
      if (isRender) {
        const dx = targetX - currentX;
        const dy = targetY - currentY;
        const distance = Math.sqrt(dx ** 2 + dy ** 2);

        if (distance > 5) {
          const moveX = (dx / distance) * speed;
          const moveY = (dy / distance) * speed;

          currentX += moveX;
          currentY += moveY;

          gsap.to(fogWrap, {
            x: currentX,
            y: currentY,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <aside id="fogWrap"></aside>;
};

export default FogEffect;
