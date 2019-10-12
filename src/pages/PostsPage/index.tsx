import React, { Component } from 'react';
import styled from 'styled-components';
import { githubApi } from '../../api';
import SiteTitle from '../../elements/SiteTitle';

const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Block = styled.div`
  font-size: 15px;
  & + & {
    margin-top: 10px;
  }
`;

// const Writing = styled.div`
//   font-size: 40px;
//   color: #40a9ff;
//   letter-spacing: 2px;
//   font-style: normal;
//   font-weight: 700;
//   margin-bottom: 10px;
//   display: inline-block;
//   &::after {
//     content: ' ';
//     display: block;
//     width: 40%;
//     border-bottom: 2px solid #cccccc;
//   }
// `;

const Text = styled.a``;

class PostsPage extends Component<{}, { resultList: any[] }> {
  state = {
    loading: true,
    resultList: []
  };

  async componentDidMount() {
    if (localStorage.getItem('v')) {
      const v = localStorage.getItem('v') || '';
      this.setState({ resultList: JSON.parse(v) });
    } else {
      let resultList = await githubApi.issues.getAll();
      localStorage.setItem('v', JSON.stringify(resultList));
      this.setState({ resultList });
    }
  }

  render() {
    return (
      <Container>
        <SiteTitle>Blog</SiteTitle>
        {this.state.resultList.map(
          ({
            updated_at,
            title,
            number
          }: {
            updated_at: string;
            title: string;
            number: number;
          }) => {
            return (
              <Block key={number}>
                {updated_at.slice(0, 10)} - <Text>{title}</Text>
              </Block>
            );
          }
        )}
      </Container>
    );
  }
}

export default PostsPage;
