// common link style
import style from "./index.module.scss";

export default function A({ children, ...props }) {
  return (
    <a className={style.link} {...props}>
      {children}
    </a>
  );
}
