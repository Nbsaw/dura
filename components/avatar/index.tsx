// common avatar style
import style from "./index.module.scss";

export default function Avatar(props) {
  return <img className={style.avatar} {...props} />;
}
