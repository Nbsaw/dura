import React, { Component } from 'react'
import Row from 'antd/lib/row'
import Icon from 'antd/lib/icon'

import { githubApi } from '../../api'
import _ from 'lodash'

const LabelTitle = ({ name }) => (
  <h3>
    <Icon type="tag-o" style={{ marginRight: '8px' }} />
    <span>{ name }</span>
  </h3>
)

const PostTitle = ({ title }) => (
  <p>{ title }</p>
)

class Lables extends Component {
  state = {
    list: [],
    labels: []
  }
  
  async componentDidMount () {
    let list = await githubApi.issues.getAll({
      username: 'Nbsaw',
      repo: 'notes'
    })
    let labels = {}
    list.forEach(item => {
      item.labels.forEach(label => {
        !Array.isArray(labels[label.name]) && (labels[label.name] = [])
        labels[label.name].push(item)
      })
    })
    this.setState({ list, labels })
  }
  
  render() {
    return (
      <div style={{ padding: '0 16px' }}>
        {
          _.map(this.state.labels, (list, name) => (
            <div style={{ marginBottom: '16px' }}>
              <LabelTitle name={name} />
              {
                list.map(post => (
                  <PostTitle title={post.title} />
                ))
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default Lables