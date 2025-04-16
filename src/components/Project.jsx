import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Project.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectMainItem from "./ProjectMainItem";
import ProjectItem from "./ProjectItem";

// gsap ScrollTrigger 등록
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  useEffect(() => {
    const projectTitle = gsap.timeline({
      scrollTrigger: {
        trigger: "#project",
        pin: false,
        scrub: false,
        toggleActions: "play none none none",
        start: "top 50%",
      },
    });

    projectTitle.to("#project .title span", {
      y: "0%",
      opacity: 1,
      duration: 1,
      ease: "back.out",
      stagger: 0.02,
    });
  }, []);

  return (
    <div id="project" className="section">
      <div className="inner">
        <div className="title-wrap">
          <h2 className="title">
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
          </h2>
          <Link to="/projectList" className="more_prj isPc">
            <span>All project</span>
            <span>more</span>
          </Link>
        </div>

        <ProjectMainItem />
        <ProjectItem selectedIds={[1, 5, 6, 7, 8, 9, 10]} />

        <Link to="/projectList" className="more_prj isMobile">
          <span>All project</span>
          <span>more</span>
        </Link>
      </div>
    </div>
  );
};

export default Project;
