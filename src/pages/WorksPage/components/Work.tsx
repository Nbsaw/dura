import React, { Component } from 'react';
import styled from 'styled-components';
import { works } from '../../../constant';
import { WorksList } from './';

const Box = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-weight: 300;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eaecef;
`;

class Work extends Component {
  render() {
    return works.map(({ type, works }) => (
      <Box key={type}>
        <Title>{type}</Title>
        <WorksList works={works} />
      </Box>
    ));
  }
}

export default Work;
