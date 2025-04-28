import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 이동 시 무조건 상단으로
  }, [pathname]); // pathname이 바뀔 때마다 실행

  return null;
};

export default ScrollToTop;
