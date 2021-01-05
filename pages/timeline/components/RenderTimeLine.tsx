import React from "react";
import { timeline } from "../../../constant";
import style from "./index.module.scss";

const Dot = () => {
  return <div className={style.dot} />;
};

const RenderTimeLine = () => {
  const years = Object.keys(timeline).reverse();
  const timelineComponents = years
    .map((year) => (
      <div className={style.timeline} key={year}>
        <h1 className={style.time}>{year}</h1>
        {timeline[year].map((item: any, idx) => {
          return (
            <div key={idx} className={style.time_item}>
              <span className={style.time_dot}>{item.dot || <Dot />}</span>
              <span className={style.time_desc}>{item.time}</span>
              {item.custom ? (
                <div className={style.custom}>{item.custom}</div>
              ) : item.text.map ? (
                <div>
                  {item.text.map((txt, idx) => (
                    <div className={style.txt} key={idx}>
                      {txt}
                    </div>
                  ))}
                </div>
              ) : (
                <div className={style.txt}>{item.text}</div>
              )}
            </div>
          );
        })}
      </div>
    ))
    .reverse();
  return <div className={style.container}>{timelineComponents}</div>;
};

export default RenderTimeLine;
