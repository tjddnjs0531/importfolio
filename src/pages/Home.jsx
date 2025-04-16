import Header from "../components/Header";
import Visual from "../components/Visual";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "../components/Contact";
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
        <Project />
        <Contact />
      </div>
    </>
  );
};

export default Home;
