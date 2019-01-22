import React, { Component } from 'react';
import SiteTitle from '../../elements/SiteTitle';

import { Container, Work } from './components';

class WorksPage extends Component {
  render() {
    return (
      <Container>
        <SiteTitle>所有文章</SiteTitle>
        <Work />
      </Container>
    );
  }
}

export default WorksPage;
