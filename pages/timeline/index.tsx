import React, { Component } from "react";
import SiteTitle from "../../components/site-title";
import RenderTimeLine from "./components/RenderTimeLine";

class TimeLinePage extends Component {
  render() {
    return (
      <>
        <SiteTitle>时间轴</SiteTitle>
        <RenderTimeLine />
      </>
    );
  }
}

export default TimeLinePage;
