// common footer component
import style from "./index.module.scss";

export default function Footer({ children, ...props }) {
  return (
    <footer className={style.footer} {...props}>
      {children}
    </footer>
  );
}
