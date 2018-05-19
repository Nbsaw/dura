import React, { Component } from 'react'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Card from 'antd/lib/card'

import { githubApi } from '../../api'
import _ from 'lodash'

class Hello extends Component {
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
        <Row type="flex" gutter={24}>
          {
            _.map(this.state.labels, (list, name) => (
              <Col
                 span={4} 
                 key={name} 
                 style={{ marginBottom: '16px' }}>
                <Card title={name}>
                  {
                    list.map(post => (
                      <p key={post.id}>{post.title}</p>
                    ))
                  }
                </Card>
              </Col>
            ))
          }
        </Row>
      </div>
    );
  }
}

export default Hello