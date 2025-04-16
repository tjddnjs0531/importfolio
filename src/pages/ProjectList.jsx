import Header from "../components/Header";
import FogEffect from "../components/FogEffect";
import Contact from "../components/Contact";
import "../components/Project.scss";
import "./ProjectList.scss";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectItem from "../components/ProjectItem";

gsap.registerPlugin(ScrollTrigger);

const ProjectList = () => {
  return (
    <div>
      <FogEffect />
      <Header />
      <div id="projectList">
        <div className="inner">
          <div className="title-wrap">
            <h3 className="title">Project</h3>
          </div>
          <ProjectItem />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ProjectList;
