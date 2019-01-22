import React from 'react';
import styled from 'styled-components';
import { WorkProps } from './types';

const Col = styled.div`
  margin-bottom: 25px;
`;

const Works = ({ title, desc }: WorkProps) => (
  <Col>
    <h3 style={{ marginTop: 16 }}>{title}</h3>
    <p>{desc}</p>
  </Col>
);

export default Works;
