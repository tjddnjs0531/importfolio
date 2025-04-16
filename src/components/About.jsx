import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.scss";
import useIntersectionFadeIn from "./../hooks/useIntersectionFadeIn";

gsap.registerPlugin(ScrollTrigger);

const skillData = [
  { title: "HTML", percent: 100 },
  { title: "CSS", percent: 100 },
  { title: "JavaScript", sub: "& JQuery", percent: 100 },
  { title: "React", percent: 60 },
  { title: "Bootstrap", percent: 90 },
  { title: "Photoshop", sub: "& Illustrator", percent: 80 },
];

const About = () => {
  useIntersectionFadeIn();

  useEffect(() => {
    // 슬로건 텍스트 배경 그라디언트 애니메이션
    const slogunAni01 = gsap.timeline({
      scrollTrigger: {
        trigger: "#slogun",
        pin: false,
        scrub: false,
        start: "top",
      },
    });
    slogunAni01.to("#slogun p", { y: "0%", duration: 1, ease: "power1.out" });

    const slogunAni02 = gsap.timeline({
      scrollTrigger: {
        trigger: "#slogun",
        pin: true,
        scrub: 2,
        start: "top",
        // markers: true,
      },
    });

    slogunAni02
      .to("#slogun .s_txt01", {
        backgroundSize: "200% 100%",
        duration: 2.5,
        ease: "power1.out",
      })
      .to("#slogun .s_txt02", {
        backgroundSize: "200% 100%",
        duration: 2.5,
        ease: "power1.out",
      })
      .to("#slogun .s_txt03", {
        backgroundSize: "200% 100%",
        duration: 2.5,
        ease: "power1.out",
      });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="about" className="section">
      <div className="inner">
        <h2 className="title fade-in-box">About</h2>
        <div className="desc fade-in-box delay" data-delay="0.3">
          에이전시에서 근무하여 많은 프로젝트와 다양한 도메인을 경험해왔으며
          <br />
          효율적인 업무를 위해 항상 새로운 것을 배우고 성장하기 위해 노력합니다.
        </div>

        <div className="skill-wrap">
          <ul>
            {skillData.map((skill, idx) => (
              <li className="item" key={idx}>
                <div className="in">
                  <p className="subj">
                    {skill.title} {skill.sub && <span>{skill.sub}</span>}
                  </p>
                  <div>
                    <p className="num">
                      {skill.percent}
                      <span>%</span>
                    </p>
                    <span className="barcode"></span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <ul className="name">
          <li className="fade-in-box">Publisher</li>
          <li className="fade-in-box">Lim Sung Won</li>
        </ul>
        <div id="slogun">
          <div className="slogun">
            <p className="s_txt01">By designing the Code</p>
            <p className="s_txt02">Design Reproduction</p>
            <p className="s_txt03">It's "Publisher"</p>
          </div>
          <div className="introduce desc fade-in-box">
            <p>
              어떤 환경, 어떤 기기에서도 잘 보이는 반응형, 웹 접근성, 웹 표준을
              고려한 페이지를 그려낼 수 있고, 누구나 쉽게 유지보수를 진행할 수
              있도록 구조화된 코드와 한눈에 알아볼 수 있는 코드를 작성합니다.
            </p>

            <p>
              효율적인 업무를 위해 항상 새로운 것을 배우고 성장하기 위해
              노력하며, SEO와 크로스 브라우징에 대한 대응으로 누락없이 꼼꼼하게
              마크업 산출물을 만들어냅니다.
            </p>

            <p>
              프로젝트에 가장 적합한 방식을 고려하여 Bootstrap, Javascript,
              JQuery, HTML, CSS, SCSS 등의 코드를 사용합니다. 최근에는
              Javascript 라이브러리인 React 를 공부하고 다양한 프레임워크
              환경에서 새로운 언어로 마크업 작업을 진행합니다.
            </p>

            <p>
              맡은 프로젝트의 목적을 우선적으로 고려하며, 팀원은 물론 다양한
              직군과의 협업을 중요하게 생각합니다. 기획자, 디자이너, 개발자와
              원활하게 협업하며 더 좋은 결과물을 만들어냅니다. 앞으로도 변화하는
              트렌드에 맞춰 성장하기 위해 노력하고높은 목표를 달성하기 위해
              매진하는 웹 퍼블리셔 임성원이 되겠습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
