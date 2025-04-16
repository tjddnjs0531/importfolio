import "./ProjectItem.scss";
import { projectData } from "../data/data";

const ProjectItem = ({ selectedIds }) => {
  const filteredProjects = selectedIds
    ? projectData.filter((project) =>
        selectedIds.map(String).includes(project.id)
      )
    : projectData;

  return (
    <ul className="project-list">
      {filteredProjects.map((project) => (
        <li key={project.id}>
          <div className="cont">
            <h3>{project.title}</h3>
            <p>HTML / CSS / Javascript / Jquery</p>
          </div>
          <a href={project.link} className="project-box-link">
            <div className="project-box-front">
              <h3>{project.title}</h3>
              <div>
                <span>{project.date}</span>
                <span>{project.description}</span>
                <p>HTML / CSS / Javascript / Jquery</p>
              </div>
            </div>
            <div className="project-box-back">
              <img src={project.imageSrc_pc} alt={`${project.title} 이미지`} />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ProjectItem;
