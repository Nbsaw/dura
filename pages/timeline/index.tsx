import React from "react";
import SiteTitle from "../../components/site-title";
import DefaultLayoutRouter from "../../layout/default";
import RenderTimeLine from "./components/RenderTimeLine";

const TimeLinePage = () => {
  return (
    <DefaultLayoutRouter>
      <SiteTitle>时间轴</SiteTitle>
      {/* <RenderTimeLine /> */}
      {RenderTimeLine()}
    </DefaultLayoutRouter>
  );
};

export default TimeLinePage;
