import React, { Component } from 'react';
import SiteTitle from 'elements/SiteTitle';
import { Card, Icon, Tag } from 'antd';
import works, { tagColor } from 'constant/works';
import styled from 'styled-components';

const Container = styled.div`
  padding: 30px;
  max-width: 1100px;
`;

const Box = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-weight: 300;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eaecef;
`;

const Cover = styled.div`
  height: 250px;
  width: 100%;
  background: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: 50% 50%;
`;

const Row = styled.div``;

const Col = styled.div`
  margin-bottom: 25px;
`;

const Works = ({ title, desc, tags }) => (
  <Col>
    <h3 style={{ marginTop: 16 }}>{title}</h3>
    <p>{desc}</p>
  </Col>
);

const WorksList = ({ works }) => {
  return (
    <div>
      {works.map(({ title, desc }, idx) => (
        <Works key={idx} title={title} desc={desc} />
      ))}
    </div>
  );
};

const Work = () =>
  works.map(({ type, works }) => (
    <Box key={type}>
      <Title>{type}</Title>
      <WorksList works={works} />
    </Box>
  ));

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
