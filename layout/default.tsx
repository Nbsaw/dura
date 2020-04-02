import React from "react";
import { me } from "../constant";
const { NIKENAME, BIO, SOCICAL_LIST, USERNAME } = me;
import style from "./index.module.scss";
import { UpOutlined } from "@ant-design/icons";
import classnames from "classnames";
import { scrollToTop } from "../utils/dom";
import { debounce } from "../utils/helper";

const DefaultLayoutRouter = ({ isPost = false, children }) => {
  return (
    <div className={style.layout}>
      <div className={classnames([style.nav, { [style.shink]: isPost }])}>
        <div className={classnames([style.box, { [style.shink]: isPost }])}>
          <div className={classnames([style.logo, { [style.shink]: isPost }])}>
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
        <div className={classnames([style.info, { [style.shink]: isPost }])}>
          <div className={classnames([style.box2, { [style.shink]: isPost }])}>
            <h3 className={style.title}>BLOG @ {NIKENAME}</h3>
            <p className={style.quote}>{BIO}</p>
          </div>
        </div>
      </div>
      <div className={classnames([style.container, { [style.shink]: isPost }])}>
        {children}
      </div>
      {/* Scroll to top */}
      {/* <div
        className={classnames([style.scrollToTop])}
        onClick={debounce(scrollToTop, 200, true)}
      >
        <UpOutlined />
      </div> */}
      <footer className={style.footer}>
        没 footer 很奇怪啊，所以加了一个但是不知道打点什么东西进来比较好 ..
      </footer>
    </div>
  );
};

export default DefaultLayoutRouter;
