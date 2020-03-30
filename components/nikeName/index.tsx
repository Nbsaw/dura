// show user nickname
import style from "./index.module.scss";

export default function NikeName({ children }) {
  return <h1 className={style.nickname}>{children}</h1>;
}
