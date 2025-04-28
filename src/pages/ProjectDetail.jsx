import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import FogEffect from "../components/FogEffect";
import Contact from "../components/Contact";
import "./ProjectDitail.scss";
import { projectData } from "../data/data";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);

  return (
    <>
      <FogEffect />
      <Header />
      <div id="projectDetail">
        <h3 class="title">{project.title}</h3>
        <div class="img">
          <img
            src={project.imageSrc_pc}
            alt={`${project.title} PC 이미지`}
            class="img_pc"
          />
          <img
            src={project.imageSrc_tab}
            alt={`${project.title} tablet 이미지`}
            class="img_tab"
          />
          <img
            src={project.imageSrc_m}
            alt={`${project.title} mobile 이미지`}
            class="img_mo"
          />
        </div>
        <div class="info">
          <div class="detail fade-in-box">
            <p class="tit">Detail</p>
            <ul>
              <li>
                <strong>작업 기간</strong>
                <span>{project.date}</span>
              </li>
              <li>
                <strong>기여도</strong>
                <span>퍼블리싱 100%</span>
              </li>
              <li>
                <strong>개발 언어</strong>
                <span>HTML / CSS / Javascript / Jquery</span>
              </li>
              <li>
                <strong>담당 업무</strong>
                <span>{project.description}</span>
              </li>
            </ul>
          </div>
          <div class="view fade-in-box">
            <p class="tit">View</p>
            <div class="desc">{project.view}</div>
          </div>
        </div>

        <div class="btn-wrap">
          <Link to="/project" class="btn-home">
            <i>
              <img src="/img/arrow.svg" alt="" />
            </i>
            Go List
          </Link>
          <a
            href={project.link}
            target="_blank"
            title="새창열림"
            class="btn-link"
          >
            사이트보기
            <i>
              <img src="/img/twingkle2.svg" alt="" />
            </i>
          </a>
          <Link to="/" class="btn-home">
            <i>
              <img src="/img/twingkle1.svg" alt="" />
            </i>
            Go Home
          </Link>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default ProjectDetail;
