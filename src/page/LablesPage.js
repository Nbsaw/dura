import React, { Component } from 'react'
import Row from 'antd/lib/row'
import styled from 'styled-components'

import Lables from 'blocks/Lables'
import Aside from 'blocks/Layout/Aside'
import LabelLoader from 'blocks/LabelLoader'
import SiteTitle from 'elements/SiteTitle'

import { USERNAME, REPO } from 'constant'
import { githubApi } from 'api'

const Container = styled.div`
  flex: 1;
  height: 100vh;
  padding: 16px;
  overflow: auto;
`

type Props = {}
type State = { labels: {} }

class LabelsPage extends Component<Props,State> {
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
      <Row type='flex'>
        <SiteTitle>所有文章</SiteTitle>
        <Aside />
        <Container>
          {
            this.state.loading
            ? <LabelLoader />
            : <Lables labels={this.state.labels} />
          }
        </Container>
      </Row>
    )
  }
}

export default LabelsPage