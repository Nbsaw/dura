// @flow
import React from 'react'
import ContentLoader from "react-content-loader";
import styled from 'styled-components'

const Container = styled.div`
  width: 1620px;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const h = 4

const Post = () => (
  <Wrapper>
    <Container>
      <h2>
        <ContentLoader
          height={8}
          width={400}
          speed={2}
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
        >
          <rect x="0" y="0" width="265" height={h} />
          <rect x="275" y="0" width="400" height={h} />
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

        <rect x="0" y={19 * h} width="400" height={h} />

        <rect x="0" y={21 * h} width="400" height={h} />

        <rect x="0" y={23 * h} width="60" height={h * 5} />
        <rect x="65" y={23 * h} width="400" height={h * 5} />

        <rect x="0" y={29 * h} width="400" height={h} />
        <rect x="0" y={31 * h} width="400" height={h} />


        <rect x="0" y={33 * h} width="20" height={h} />
        <rect x="30" y={33 * h} width="300" height={h} />
        <rect x="335" y={33 * h} width="60" height={h} />

        <rect x="0" y={35 * h} width="400" height={h} />

        <rect x="0" y={37 * h} width="400" height={h * 8} />

        <rect x="0" y={46 * h} width="400" height={h} />
        <rect x="0" y={48 * h} width="400" height={h} />
      </ContentLoader>
    </Container>
  </Wrapper>
);

export default Post;
