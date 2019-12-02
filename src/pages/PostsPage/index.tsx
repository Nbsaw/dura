import React, { Component } from 'react';
import styled from 'styled-components';
import { githubApi } from '../../api';
import SiteTitle from '../../elements/SiteTitle';
import removeMd from 'remove-markdown';

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

const Text = styled.a``;

class PostsPage extends Component<{}, { resultList: any[] }> {
  state = {
    loading: true,
    resultList: []
  };

  async componentDidMount() {
    if (localStorage.getItem('v')) {
      const v = localStorage.getItem('v') || '';
      console.log(JSON.parse(v));
      // logger
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
            number,
            body
          }: {
            updated_at: string;
            title: string;
            number: number;
            body: string;
          }) => {
            const plainText = removeMd(body);
            return (
              <Block key={number}>
                {updated_at.slice(0, 10)} - <Text>{title}</Text>
                <div>{plainText.slice(0, 150)}</div>
              </Block>
            );
          }
        )}
      </Container>
    );
  }
}

export default PostsPage;
