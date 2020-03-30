// description component
import style from "./index.module.scss";

export default function Description({ children, ...props }) {
  return (
    <div className={style.description} {...props}>
      {children}
    </div>
  );
}
