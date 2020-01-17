import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 550px;
  height: 350px;
  overflow: hidden;
  padding: 20px 50px;
  box-sizing: content-box;
  border: 1px solid rgb(236, 232, 232);
  margin-bottom: 20px;
  &:nth-child(2n-1) {
    margin-right: 20px;
  }
`;

const PostLoader = () => (
  <Wrapper>
    <ContentLoader
      height={350}
      width={550}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      {/* 标题 文字 */}
      <rect x="0" y="50" width="240" height={10} />
      <rect x="0" y="75" width="120" height={10} />

      {/* 标签 */}
      <rect x="0" y="100" width="60" height={20} />
      <rect x="65" y="100" width="60" height={20} />
      <rect x="130" y="100" width="60" height={20} />

      {/* 文章缩写 */}
      <rect x="0" y="160" width="240" height={13} />
      <rect x="0" y="183" width="240" height={13} />
      <rect x="0" y="206" width="240" height={13} />
      <rect x="0" y="228" width="240" height={13} />
      <rect x="0" y="253" width="206" height={13} />

      {/* Read More */}
      <rect x="0" y="340" width="75" height={13} />

      {/* 右边缩略图 */}
      <rect x="350" y="50" width="220" height={260} />
    </ContentLoader>
  </Wrapper>
);

export default PostLoader;
