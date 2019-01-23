
import React, { Component } from 'react';
import Labels from '../../blocks/Labels';
import LabelLoader from '../../blocks/LabelLoader';
import SiteTitle from '../../elements/SiteTitle';

import { githubApi } from '../../api';
import { getAllResponse } from '../../api/github/issues/types';

interface PostsPageProps {}
interface PostsPageState {
  labels: {
    [key: string]: {
      // items is alias of issues item
      items: getAllResponse[],
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
    resultList = resultList.filter(item => item.author_association === 'OWNER');

    // get tag color and items
    resultList.forEach(item => {
      item.labels.forEach(({ name, color }) => {
        // init the labels
        if (!(labels[name] !== null && typeof labels[name] === 'object')) {
          labels[name] = { items: [], color: '' }
        }
        labels[name]['items'].push(item);
        labels[name]['color'] = `#${color}`;
      });
    });
    
    this.setState({ labels, loading: false });
  }

  render()  {
    return (
      <>
       <SiteTitle>所有文章</SiteTitle>
       {this.state.loading ? (
          <LabelLoader />
        ) : (
          <Labels labels={this.state.labels} />
        )}
      </>
    )
  }
}

export default PostsPage;
