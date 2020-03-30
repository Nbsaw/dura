// common padding section
import style from "./index.module.scss";

export default function Section({ children }) {
  return <div className={style.section}>{children}</div>;
}
