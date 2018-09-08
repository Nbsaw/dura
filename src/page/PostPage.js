import React, { Component } from 'react';
import styled from 'styled-components';
import MarkdownIt from 'markdown-it';
import { withRouter } from 'react-router';
import _ from 'lodash';

import SiteTitle from 'elements/SiteTitle';
import PostLoader from 'blocks/PosterLoader';
import { githubApi } from 'api';

const Comment = styled.div`
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const CommentLeft = styled.div`
  margin-right: 15px;
`;

const CommentRight = styled.div`
  line-height: 25px;
  flex: 1;
  border: 1px solid #e1e3e4;
  border-radius: 3px;
  p {
    margin: 0;
    padding: 10px 20px;
  }
`;

const CommentAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 3px;
`;

const md = MarkdownIt();

class PostPage extends Component {
  state = {
    postTitle: '',
    content: '',
    load: false,
    comments: [],
  };
  async componentDidMount() {
    const issuesId = this.props.match.params.number;
    try {
      const result = await githubApi.issues.getDetails({ number: issuesId });
      const dom = document.createElement('div');
      dom.innerHTML = md.render(result.body);
      // highlight code
      _.forEach(dom.getElementsByTagName('pre'), elm =>
        window.hljs.highlightBlock(elm)
      );
      const comments = await githubApi.issues.getComments({ number: issuesId });
      this.setState({
        comments,
        content: dom.innerHTML,
        postTitle: result.title,
        load: true,
      });
    } catch (e) {
      console.log(e);
      this.props.history.replace('/404');
    }
  }
  render() {
    if (this.state.load && !this.state.error) {
      return (
        <div className="content">
          <SiteTitle>{this.state.postTitle}</SiteTitle>
          <h2>{this.state.postTitle}</h2>
          <p dangerouslySetInnerHTML={{ __html: this.state.content }} />
          <div style={{ marginTop: 30 }}>
            {this.state.comments.length > 0 ? (
              <h3>> 评论</h3>(
                this.state.comments.map((comment, idx) => (
                  <Comment key={idx}>
                    <CommentLeft>
                      <a href={comment.user.url}>
                        <CommentAvatar src={comment.user.avatar_url} />
                      </a>
                    </CommentLeft>
                    <CommentRight>
                      <p>
                        <b>{comment.user.login}</b>
                        {` commented on ${new Date(
                          comment.created_at
                        ).toDateString()}`}
                      </p>
                      <p>{comment.body}</p>
                    </CommentRight>
                  </Comment>
                ))
              )
            ) : (
              <h3>> 暂无评论</h3>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <SiteTitle> 文章加载中 ... </SiteTitle>
          <PostLoader />
        </React.Fragment>
      );
    }
  }
}

export default withRouter(PostPage);
