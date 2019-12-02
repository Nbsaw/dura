import React, { Component } from 'react';
import styled from 'styled-components';
import { githubApi } from '../../api';
import SiteTitle from '../../elements/SiteTitle';
import removeMd from 'remove-markdown';
import PostTitle from '../TagsPage/components/PostTitle';
import Icon from 'antd/lib/icon';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Block = styled.div`
  font-size: 12px;
  display: flex;
  flex-shrink: 0;
  /* height: 400px; */
  padding: 50px 25px;
  border: 1px solid #ece8e8;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  &:nth-child(1n) {
    margin-right: 20px;
  }
`;

const BlockText = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
`;

const BlockTextTitle = styled.h2``;

const BlockImage = styled.img`
  width: 300px;
  height: 200px;
  flex-shrink: 0;
  margin-left: 25px;
`;

const BlockReadMore = styled(Link)`
  width: 100%;
`;

const PostAt = styled.div`
  margin-bottom: 15px;
`;

// https://picsum.photos/seed/picsum/200/300

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
            number: string;
            body: string;
          }) => {
            const plainText = removeMd(body);
            return (
              <Block key={number}>
                <BlockText>
                  <PostAt>发布于 {updated_at.slice(0, 10)}</PostAt>
                  <PostTitle number={number} title={title} />
                  <p>{`${plainText.slice(0, 120)} ...`}</p>
                </BlockText>
                <div>
                  <BlockImage
                    src={`https://picsum.photos/500/300?number=${number}`}
                  />
                </div>
                <BlockReadMore to={`post/${number}`}>
                  Read More ...
                </BlockReadMore>
              </Block>
            );
          }
        )}
      </Container>
    );
  }
}

export default PostsPage;
