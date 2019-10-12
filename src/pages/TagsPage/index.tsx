import React, { Component } from 'react';
import Labels from './components/Labels';
import LabelLoader from './components/LabelLoader';
import SiteTitle from '../../elements/SiteTitle';

import { githubApi } from '../../api';
import { TagsPageState } from './types';

class TagsPage extends Component<{}, TagsPageState> {
  state = {
    labels: {},
    loading: true
  };

  async componentDidMount() {
    let resultList = await githubApi.issues.getAll();
    let labels: TagsPageState['labels'] = {};
    type itemType = typeof resultList[number];

    let isOwner = (item: itemType) => item.author_association === 'OWNER';
    let isWIP = (item: itemType) =>
      item.labels.some(label => label.name === 'WIP');

    // filter OWNER and not WIP post
    resultList = resultList.filter(item => isOwner(item) && !isWIP(item));

    // get tag color and items
    resultList.forEach(item => {
      item.labels.forEach(({ name, color }) => {
        // init the labels
        if (!(labels[name] !== null && typeof labels[name] === 'object')) {
          labels[name] = { items: [], color: '' };
        }
        labels[name]['items'].push(item);
        labels[name]['color'] = `#${color}`;
      });
    });

    this.setState({ labels, loading: false });
  }

  render() {
    return (
      <>
        <SiteTitle>Tags</SiteTitle>
        {this.state.loading ? (
          <LabelLoader />
        ) : (
          <Labels labels={this.state.labels} />
        )}
      </>
    );
  }
}

export default TagsPage;
