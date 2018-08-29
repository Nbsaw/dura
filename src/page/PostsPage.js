import React, { Component } from 'react'

import Lables from 'blocks/Lables'
import LabelLoader from 'blocks/LabelLoader'
import SiteTitle from 'elements/SiteTitle'

import { USERNAME, REPO } from 'constant'
import { githubApi } from 'api'

class PostsPage extends Component {
  state = {
    labels: {},
    loading: true
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
    this.setState({ labels, loading: false })
  }
  render () {
    return (
      <React.Fragment>
        <SiteTitle>所有文章</SiteTitle>
        {
          this.state.loading
          ? <LabelLoader />
          : <Lables labels={this.state.labels} />
        }
      </React.Fragment>
    )
  }
}

export default PostsPage