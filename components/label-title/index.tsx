// the label title for post
import React from "react";
import style from "./index.module.scss";

interface LabelTitleProps {
  name: string;
  color?: string;
}

const LabelTitle = ({ name, color }: LabelTitleProps) => (
  <h3 className={style.label_title} style={{ background: color }}>
    <span className={style.label_title_text}>{name}</span>
  </h3>
);

export default LabelTitle;
