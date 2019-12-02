import React, { Component } from 'react';
import styled from 'styled-components';
import SiteTitle from '../../elements/SiteTitle';
import { WECAHT } from '../../constant/me';

const Box = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-weight: 300;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eaecef;
`;

class AboutPage extends Component {
  render() {
    return (
      <>
        <SiteTitle>关于我</SiteTitle>
        <Box>
          <Title>一些信息</Title>
          <p>什么都写 ... 什么都搞 ... 搬砖</p>
          <p>WECAHT: {WECAHT}</p>
        </Box>
      </>
    );
  }
}

export default AboutPage;
