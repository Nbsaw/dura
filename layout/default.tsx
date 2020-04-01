import React from "react";
import { me } from "../constant";
const { NIKENAME, BIO, SOCICAL_LIST, USERNAME } = me;
import style from "./index.module.scss";

const DefaultLayoutRouter = ({ isPost = false, children }) => {
  return (
    <div className={style.layout}>
      <div className={`${style.nav} ${isPost && style.shink}`}>
        <div className={`${style.box} ${isPost && style.shink}`}>
          <div className={`${style.logo} ${isPost && style.shink}`}>
            {NIKENAME}
          </div>
          <div className={style.socical_list}>
            {SOCICAL_LIST.map((item, idx) => {
              return (
                <a key={idx} href={item.link}>
                  {item.key}
                </a>
              );
            })}
          </div>
        </div>
        <div className={`${style.info} ${isPost && style.shink}`}>
          <div className={`${style.box2} ${isPost && style.shink}`}>
            <h3 className={style.title}>BLOG @ {NIKENAME}</h3>
            <p className={style.quote}>{BIO}</p>
          </div>
        </div>
      </div>
      <div className={`${style.container} ${isPost && style.shink}`}>
        {children}
      </div>

      <footer className={style.footer}>
        没 footer 很奇怪啊，所以加了一个但是不知道打点什么东西近来比较好 ..
      </footer>
    </div>
  );
};

export default DefaultLayoutRouter;
