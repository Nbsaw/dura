import React from "react";
import { me } from "../constant";
const { NIKENAME, BIO, SOCICAL_LIST, USERNAME } = me;
import style from "./index.module.scss";
import classnames from "classnames";
import Link from "next/link";

const DefaultLayoutRouter = ({ isPost = false, children }) => {
  return (
    <div className={style.layout}>
      <div className={classnames([style.nav, { [style.shink]: isPost }])}>
        <div className={classnames([style.box, { [style.shink]: isPost }])}>
          <Link href="/">
            <div
              className={classnames([style.logo, { [style.shink]: isPost }])}
            >
              {USERNAME.toUpperCase()}
            </div>
          </Link>
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
        <div className={classnames([style.info, { [style.shink]: isPost }])}>
          <div className={classnames([style.box2, { [style.shink]: isPost }])}>
            <Link href="/posts">
              <h3 className={style.title}>BLOG @ {NIKENAME}</h3>
              <p className={style.quote}>{BIO}</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={classnames([style.container, { [style.shink]: isPost }])}>
        {children}
      </div>
      <footer className={style.footer}>
        <span className={style.footer_text}>
          『 没 footer 很奇怪啊 ... 所以加了一个但是不知道打点什么东西进来比较好
          .. 』
        </span>
      </footer>
    </div>
  );
};

export default DefaultLayoutRouter;
