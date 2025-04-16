import publisher from "../assets/img/publisher.svg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import useIntersectionFadeIn from "./../hooks/useIntersectionFadeIn";
import "./Visual.scss";

gsap.registerPlugin(TextPlugin); // 플러그인 등록

const Visual = () => {
  useIntersectionFadeIn();
  const typingRef = useRef(null);

  useEffect(() => {
    const text = "코드를 디자인하고, 디자인을 현실로 만듭니다";

    gsap.to(typingRef.current, {
      duration: text.length * 0.125,
      text: text,
      ease: "none",
    });
  }, []);

  return (
    <div id="visual" className="inner">
      <div className="typing-wrap">
        <span>(</span>
        <p id="typing" className="slogun" ref={typingRef}></p>
        <span>)</span>
      </div>
      <h1 className="pub">
        <img src={publisher} alt="" />
      </h1>
      <div className="desc fade-in-box">
        안녕하세요! 더 나은 결과를 위해 성장하고
        <br />
        도전하는 웹 퍼블리셔 임성원입니다.
      </div>

      <div className="since">
        <span>Web Portfolio</span>
        <span>Since 2025</span>
      </div>

      <div className="scroll-btn">
        <div className="scroll-btn-txt">
          <img src="./img/scrollText.svg" alt="" />
        </div>
        <div className="scroll-btn-link">
          <a href="#about">
            <p className="hide">scroll down</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Visual;
