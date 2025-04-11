import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectList from "./pages/ProjectList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectList" element={<ProjectList />} />
      </Routes>
    </>
  );
}

export default App;
