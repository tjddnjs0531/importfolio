import "./ProjectMainItem.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { projectData } from "../data/data";

gsap.registerPlugin(ScrollTrigger);

const ProjectItem = ({ id, number, engTitle, title, imageSrc_pc }) => {
  return (
    <li className="project-item">
      <div className="cont">
        <h3>
          <span>{number}</span>
          {engTitle}
        </h3>
        <div>
          <h4>{title}</h4>
          <p>HTML / CSS / Javascript / Jquery</p>
        </div>
        <Link to={`/project/${id}`} className="btn-more">
          more info
        </Link>
      </div>
      <div className="img">
        <img src={imageSrc_pc} alt={`${title} 이미지`} />
      </div>
    </li>
  );
};

const ProjectMainItem = () => {
  const selectedIds = ["2", "3", "4"]; // 원하는 id 값들을 배열로 지정

  const filteredProjects = projectData.filter((project) =>
    selectedIds.includes(project.id)
  );

  useEffect(() => {
    function initScrollAnimation() {
      ScrollTrigger.getById("projectTimeline")?.kill();
      if (window.projectTimeline) {
        window.projectTimeline.kill();
      }

      if (window.innerWidth < 1024) return;

      let projectTimeline = gsap.timeline({
        scrollTrigger: {
          id: "projectTimeline",
          trigger: ".project-container",
          start: "top top",
          end: "+=" + 1 * window.innerHeight,
          scrub: 1,
          pin: true,
        },
      });

      let items = [...document.querySelectorAll(".project-item")];

      projectTimeline.to(
        ".project-item-wrap",
        {
          y: -400 + 0.3 * window.innerHeight,
          duration: 1,
          ease: "none",
        },
        0.2
      );

      items.forEach((item, index) => {
        if (index === items.length - 1) return;
        projectTimeline.to(
          item,
          {
            duration: 0.6,
            height: 110,
            ease: "none",
          },
          0.6 * index
        );
      });

      window.projectTimeline = projectTimeline;
    }

    initScrollAnimation();

    const handleResize = () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.id === "projectTimeline") {
          st.kill();
        }
      });

      initScrollAnimation();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getById("projectTimeline")?.kill();
      window.projectTimeline?.kill();
    };
  }, []);

  return (
    <div className="project-container">
      <ul className="project-item-wrap">
        {filteredProjects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectMainItem;
