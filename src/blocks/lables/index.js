// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import { USERNAME, REPO } from '../../constant'
import { githubApi } from '../../api'

type Props = {}
type State = { labels: {} }
type LableTitleParams = { name: string, color: string }
type PostTitleParams = { number: number, title: string}

const LabelTitle = ({ name, color } : LableTitleParams) => (
  <h3 style={{ marginBottom: '16px' }}>
    <span style={{ display: 'inline-block', background: color, color: '#FFFFFF', padding: '0px 12px', borderRadius: 5 }}>{ name }</span>
  </h3>
)

const PostTitle = ({ number, title } : PostTitleParams) => (
  <p style={{ fontSize: '15px' }}>
    <Link to={`label/${number}`}>
      { title }
    </Link>
  </p>
)

class Lables extends Component<Props,State> {
  state = {
    labels: {}
  }
  
  async componentDidMount () {
    let resultList = await githubApi.issues.getAll({
      username: USERNAME,
      repo: REPO
    })
    let labels = {}
    resultList.forEach(item => {
      item.labels.forEach(({ name, color }) => {
        !(labels[name] !== null && typeof labels[name] === 'object') && (labels[name] = {})
        !Array.isArray(labels[name]['items']) && (labels[name]['items'] = [])
        labels[name]['items'].push(item)
        labels[name]['color'] = `#${color}`
      })
    })
    this.setState({ labels })
  }
  
  render() {
    return (
      <div style={{ padding: '16px', height: '100vh', overflow: 'auto', flex: 1 }}>
        {
          _.map(this.state.labels, ({ items, color }, name) => (
            <div key={name} style={{ marginBottom: '16px' }}>
              <LabelTitle name={name} color={color} />
              {
                items.map(post => (<PostTitle {...post} />))
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default Lables