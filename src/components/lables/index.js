// @flow
import React, { Component } from 'react'
import Icon from 'antd/lib/icon'
import { Link } from 'react-router-dom'

import { githubApi } from '../../api'
import _ from 'lodash'

type Props = {}
type State = { list: [], labels: {} }
type LableTitleParams = { name: string }
type PostTitleParams = { number: number, title: string}

const LabelTitle = ({ name } : LableTitleParams) => (
  <h3>
      <Icon type="tag-o" style={{ marginRight: '8px' }} />
      <span>{ name }</span>
  </h3>
)

const PostTitle = ({ number, title } : PostTitleParams) => (
  <Link to={`label/${number}`}>
    <p>{number} { title }</p>
  </Link>
)

class Lables extends Component<Props,State> {
  state = {
    list: [],
    labels: {}
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
            <div key={name} style={{ marginBottom: '16px' }}>
              <LabelTitle name={name} />
              {
                list.map(post => (
                  <PostTitle 
                    key={post.number} 
                    number={post.number} 
                    title={post.title}
                  />
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