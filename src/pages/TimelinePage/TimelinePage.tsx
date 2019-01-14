import React, { Component } from 'react';
import SiteTitle from '../../elements/SiteTitle';
import { RenderTimeLine } from './components';

class TimeLinePage extends Component {
  render() {
    return (
      <React.Fragment>
        <SiteTitle>时间轴</SiteTitle>
        <RenderTimeLine />
      </React.Fragment>
    );
  }
}

export default TimeLinePage;
