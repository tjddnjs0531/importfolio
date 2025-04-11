import Header from "../components/Header";
import Visual from "../components/Visual";
import About from "../components/About";
import ProjectMainItem from "../components/ProjectMainItem";
import ProjectItem from "../components/ProjectItem";
import "./Home.scss";
import FogEffect from "../components/FogEffect";

const Home = () => {
  return (
    <>
      <FogEffect />
      <Header />
      <div className="main">
        <Visual />
        <About />
      </div>
    </>
  );
};

export default Home;
