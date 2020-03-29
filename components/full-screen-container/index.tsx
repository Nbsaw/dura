import style from "./index.module.scss";

export default function FullScreenContainer({ children }) {
  return <div className={style.full_screen_container}>{children}</div>;
}
