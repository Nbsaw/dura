import React, { Component } from 'react';
import SiteTitle from '../../elements/SiteTitle';
import FullScreenContainer from '../../elements/FullScreenContainer';

import { Aside } from './components';
import Footer from '../../elements/Footer';

class HomePage extends Component {
  render() {
    return (
      <FullScreenContainer>
        <SiteTitle>首页</SiteTitle>
        <Aside />
        <Footer>© 2018 nbsaw </Footer>
      </FullScreenContainer>
    );
  }
}

export default HomePage;
