// let fullscreen easy comopnent
import style from "./index.module.scss";
import classnames from "classnames";

export default function FullScreenContainer({ className = "", children }) {
  return (
    <div className={classnames([style.full_screen_container, className])}>
      {children}
    </div>
  );
}
