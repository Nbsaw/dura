import React, { Component } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { githubApi } from 'api';
import { me, config } from 'constant';

const { USERNAME, REPO } = me;

const CommentContainer = styled.div`
  width: 100%;
  textarea {
    width: 100%;
    resize: vertical;
    min-height: 50px;
    max-height: 100px;
  }
`;

class CommentPage extends Component {
  constructor(props) {
    super(props);
    this.textareaRef = React.createRef();
    this.submit = this.submit.bind(this);
    this.redirectLogin = this.redirectLogin.bind(this);
  }
  _auto_grow(e) {
    const element = e.target;
    element.style.height = '5px';
    element.style.height = element.scrollHeight + 'px';
  }
  async submit() {
    const body = this.textareaRef.current.value;
    const accessToken = window.localStorage.getItem('accessToken');
    const issuesId = 67;
    try {
      await githubApi.issues.createComment({ body, accessToken, issuesId });
    } catch (e) {
      console.log('评论失败');
    }
  }
  redirectLogin() {
    const loginLink = `
    https://github.com/login/oauth/authorize?scope=public_repo&client_id=${
      config.CLIENTID
    }&client_secret=${config.CLIENTSECRET}`;
    const link = window.location.hash.substr(1);
    localStorage.setItem('redirect_uri', link);
    window.location.href = loginLink;
  }
  render() {
    return (
      <CommentContainer>
        <a onClick={this.redirectLogin}>点击登陆</a>
        <textarea
          ref={this.textareaRef}
          onKeyUp={this._auto_grow}
          placeholder="Leave a comment"
        />
        <Button type="primary" onClick={this.submit} block>
          Primary
        </Button>
      </CommentContainer>
    );
  }
}

export default CommentPage;
