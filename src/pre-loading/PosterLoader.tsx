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

const Post = () => (
  <Wrapper>
    {/* <Container>
      <h2>
        <ContentLoader
          height={8}
          width={400}
          speed={2}
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
        >
          <rect x="0" y="0" width="160" height={h} />
        </ContentLoader>
      </h2>
      <ContentLoader
        height={400}
        width={400}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
      >
        <rect x="0" y="0" width="400" height={h} />

        <rect x="0" y={2 * h} width="20" height={h} />
        <rect x="30" y={2 * h} width="300" height={h} />
        <rect x="335" y={2 * h} width="60" height={h} />

        <rect x="0" y={4 * h} width="400" height={h} />

        <rect x="0" y={6 * h} width="400" height={h * 8} />

        <rect x="0" y={15 * h} width="25" height={h} />
        <rect x="30" y={15 * h} width="300" height={h} />
        <rect x="335" y={15 * h} width="60" height={h} />

        <rect x="0" y={17 * h} width="400" height={h} />

        <rect x="0" y={19 * h} width="120" height={h} />

        <rect x="0" y={21 * h} width="60" height={h} />

        <rect x="0" y={23 * h} width="30" height={h} />
      </ContentLoader>
    </Container> */}
  </Wrapper>
);

export default Post;
