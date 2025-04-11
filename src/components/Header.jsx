import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header id="header">
      <p>Cord ↘</p>
      <nav id="gnb">
        <ul className="gnb">
          {isHome ? (
            // Home 페이지 메뉴: 섹션 이동
            <>
              <li>
                <a href="#visual">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </>
          ) : (
            // Project 페이지 메뉴: 라우팅
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/projectList">Project</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
      <p>Reality ↗</p>
    </header>
  );
};

export default Header;
