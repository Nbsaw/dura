import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const Container = styled.div`
  width: 1620px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const h = 4;

const LabelLoader = () => (
  <Wrapper>
    <Container>
      <ContentLoader
        height={400}
        width={400}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
      >
        <rect x="0" y="0" width="15" height={h} />
        <rect x="0" y={2 * h} width="60" height={h} />
        <rect x="0" y={4 * h} width="80" height={h} />
        <rect x="0" y={6 * h} width="60" height={h} />
        <rect x="0" y={8 * h} width="40" height={h} />
        <rect x="0" y={10 * h} width="75" height={h} />

        <rect x="0" y={14 * h} width="15" height={h} />
        <rect x="0" y={16 * h} width="60" height={h} />
        <rect x="0" y={18 * h} width="80" height={h} />
        <rect x="0" y={20 * h} width="60" height={h} />
        <rect x="0" y={22 * h} width="40" height={h} />
        <rect x="0" y={24 * h} width="75" height={h} />

        <rect x="0" y={28 * h} width="15" height={h} />
        <rect x="0" y={30 * h} width="60" height={h} />
        <rect x="0" y={32 * h} width="80" height={h} />
        <rect x="0" y={34 * h} width="60" height={h} />
        <rect x="0" y={36 * h} width="40" height={h} />
        <rect x="0" y={38 * h} width="75" height={h} />
        <rect x="0" y={40 * h} width="95" height={h} />
      </ContentLoader>
    </Container>
  </Wrapper>
);

export default LabelLoader;
