import React, { Component } from 'react';
import MarkdownIt from 'markdown-it';
import { withRouter } from 'react-router';
import _ from 'lodash';

import SiteTitle from 'elements/SiteTitle';
import PostLoader from 'blocks/PosterLoader';
import { me } from 'constant';
import { githubApi } from 'api';

const { USERNAME, REPO } = me;

const md = MarkdownIt();

class PostPage extends Component {
  state = {
    postTitle: '',
    content: '',
    load: false,
  };
  async componentDidMount() {
    const { match } = this.props;
    try {
      const result = await githubApi.issues.getDetails({
        username: USERNAME,
        repo: REPO,
        number: match.params.number,
      });
      const dom = document.createElement('div');
      dom.innerHTML = md.render(result.body);
      // highlight code
      _.forEach(dom.getElementsByTagName('pre'), elm =>
        window.hljs.highlightBlock(elm)
      );
      this.setState({
        content: dom.innerHTML,
        postTitle: result.title,
        load: true,
      });
    } catch (e) {
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
