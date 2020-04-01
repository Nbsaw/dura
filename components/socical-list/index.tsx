// The socical list
import React from "react";
import SocicalLink from "../socical-link";
import style from "./index.module.scss";

export interface PSocicalList {
  list: { link: string; key: string }[];
}

const SocicalList = ({ list }: PSocicalList) => (
  <ul className={style.socical_list}>
    {list.map((item, idx) => {
      return (
        <li key={idx}>
          <SocicalLink href={item.link}>{item.key}</SocicalLink>
        </li>
      );
    })}
  </ul>
);

export default SocicalList;
