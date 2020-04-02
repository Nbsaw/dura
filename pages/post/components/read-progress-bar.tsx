import style from "./index.module.scss";
import { useRef, useEffect } from "react";

const ReadProgressBar = () => {
  const ref = useRef();
  useEffect(() => {
    if (ref?.current) {
      let prog = document.getElementById("progress");
      let html = document.documentElement;
      let height = html.offsetHeight;
      const setProgress = () => {
        let scrollFromTop = html.scrollTop;
        let w = scrollFromTop / height;
        w = w < 0 ? 0 : w > 1 ? 1 : w;
        let width = `${w * 100}%`;
        prog.style.width = width;
      };
      window.addEventListener("scroll", setProgress);
      return () => {
        window.removeEventListener("scroll", setProgress);
      };
    }
  }, [ref]);
  return <div ref={ref} className={style.progress} id="progress"></div>;
};

export default ReadProgressBar;
