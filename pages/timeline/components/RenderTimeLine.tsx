import React, { Component } from "react";
import { timeline } from "../../../constant";
import style from "./index.module.scss";

class RenderTimeLine extends Component {
  render() {
    const years = Object.keys(timeline);
    const timelineComponents = years
      .map(year => (
        <div className={style.timeline} key={year}>
          <h1 className={style.time}>{year}</h1>
          {timeline[year].map((item, idx) => (
            // <Timeline.Item key={idx} color={item.color} dot={item.dot}>
            //   {item.text}
            // </Timeline.Item>
            <div>
              {item.dot}
              {item.text}
            </div>
          ))}
        </div>
      ))
      .reverse();
    return timelineComponents;
  }
}

export default RenderTimeLine;
