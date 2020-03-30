import React from "react";
import A from "../a";
import style from "./index.module.scss";

export interface PSocicalList {
  list: { link: string; key: string }[];
}

const SocicalList = ({ list }: PSocicalList) => (
  <ul className={style.socical_list}>
    {list.map((item, idx) => {
      return (
        <li key={idx}>
          <A href={item.link}>{item.key}</A>
        </li>
      );
    })}
  </ul>
);

export default SocicalList;
