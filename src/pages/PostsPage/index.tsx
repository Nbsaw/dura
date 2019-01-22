/// <reference path="../../api/github/issues/types.d.ts" />

import React, { Component } from 'react';
import Labels from '../../blocks/Labels';
import LabelLoader from '../../blocks/LabelLoader';
import SiteTitle from '../../elements/SiteTitle';


import { githubApi } from '../../api';

interface PostsPageProps {}
interface PostsPageState {
  labels: {
    [key: string]: {
      items: IssuesApiTypes.getAllResponse[],
      color: string,
    },
  };
  loading: boolean;
}

class PostsPage extends Component<PostsPageProps, PostsPageState> {
  state = {
    labels: {},
    loading: true,
  };

  async componentDidMount() {
    let resultList = await githubApi.issues.getAll();
    let labels: PostsPageState["labels"] = {};
    // filter OWNER post
    resultList.filter(item => item.author_association === 'OWNER');
    resultList.forEach(item => {
      item.labels.forEach(({ name, color }) => {
        !(labels[name] !== null && typeof labels[name] === 'object') &&
          (labels[name] = { items: [], color: '' });
        !Array.isArray(labels[name]['items']) && (labels[name]['items'] = []);
        labels[name]['items'].push(item);
        labels[name]['color'] = `#${color}`;
      });
    });
    this.setState({ labels, loading: false });
  }

  render()  {
    return (
      <React.Fragment>
       <SiteTitle>所有文章</SiteTitle>
       {this.state.loading ? (
          <LabelLoader />
        ) : (
          <Labels labels={this.state.labels} />
        )}
      </React.Fragment>
    )
  }
}

export default PostsPage;
