import { useEffect } from "react";
import "./Contact.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIntersectionFadeIn from "./../hooks/useIntersectionFadeIn";

// gsap ScrollTrigger 등록
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useIntersectionFadeIn();

  useEffect(() => {
    const contactTitle = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        pin: false,
        scrub: false,
        toggleActions: "play none none none",
        start: "top 50%",
      },
    });

    contactTitle.to("#contact .title span", {
      y: "0%",
      opacity: 1,
      duration: 1,
      ease: "back.out",
      stagger: 0.02,
    });
  }, []);

  return (
    <div id="contact">
      <div className="inner">
        <div className="title-wrap">
          <h2 className="title">
            <span>C</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
          </h2>
          <p className="desc fade-in-box">imsungwon31@gmail.com</p>
        </div>

        <div className="container">
          <a href="mailto:imsungwon31@gmail.com" className="mail">
            <desc className="hide">메일 보내기</desc>
          </a>
          <div>
            <h3 className="fade-in-box">
              ( 기본기가 탄탄하고, 끊임없이 성장하는 인재 )
            </h3>
            <p className="fade-in-box delay" data-delay="0.3">
              메일을 보내주시면 확인 후 최대한 빠르게 회신 드리겠습니다.
            </p>
          </div>
        </div>
      </div>

      <div className="flow-text-track">
        <div className="flow-text">
          Cord → Design → Reality Cord → Design → Reality Cord → Design →
          Reality Cord → Design → Reality Cord → Design → Reality Cord → Design
          → Reality
        </div>
      </div>
    </div>
  );
};

export default Contact;
