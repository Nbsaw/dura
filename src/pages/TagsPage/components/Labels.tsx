import React, { Component } from 'react';
import _ from 'lodash';

import LabelTitle from './LabelTitle';
import PostTitle from './PostTitle';

import { LabelsProps, LabelsState } from '../types';

class Labels extends Component<LabelsProps, LabelsState> {
  render() {
    return (
      <>
        {_.map(this.props.labels, ({ items, color }, name) => {
          if (name !== 'WIP') {
            return (
              <div key={name} style={{ marginBottom: '16px' }}>
                <LabelTitle name={name} color={color} />
                {items.map((post, idx) => (
                  <PostTitle key={idx} {...post} />
                ))}
              </div>
            );
          }
        })}
      </>
    );
  }
}

export default Labels;
