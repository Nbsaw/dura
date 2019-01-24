import React, { Component } from 'react';
import MarkdownIt from 'markdown-it';
import { withRouter } from 'react-router';
import _ from 'lodash';
import hljs from 'highlight.js';

import SiteTitle from '../../elements/SiteTitle';
import PostLoader from '../../blocks/PosterLoader';
import { githubApi } from '../../api';
import { PostPageProps, PostPageState } from './types';

const md = MarkdownIt();

class PostPage extends Component<PostPageProps, PostPageState> {
  state = {
    postTitle: '',
    content: '',
    load: false
  };
  async componentDidMount() {
    const issuesId = this.props.match.params.number;
    try {
      const result = await githubApi.issues.getDetails({ number: issuesId });
      const dom = document.createElement('div');
      dom.innerHTML = md.render(result.body);

      // highlight code
      _.forEach(dom.getElementsByTagName('pre'), elm =>
        hljs.highlightBlock(elm)
      );

      this.setState({
        content: dom.innerHTML,
        postTitle: result.title,
        load: true
      });
    } catch (e) {
      this.props.history.replace('/404');
    }
  }
  render() {
    if (this.state.load) {
      return (
        <div className="content">
          <SiteTitle>{this.state.postTitle}</SiteTitle>
          <h2>{this.state.postTitle}</h2>
          <p dangerouslySetInnerHTML={{ __html: this.state.content }} />
        </div>
      );
    } else {
      return (
        <>
          <SiteTitle> 文章加载中 ... </SiteTitle>
          <PostLoader />
        </>
      );
    }
  }
}

export default withRouter(PostPage);
