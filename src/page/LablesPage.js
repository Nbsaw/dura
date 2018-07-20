import React, { Component } from 'react'
import Row from 'antd/lib/row'

import Lables from 'blocks/Lables'
import Aside from 'blocks/Layout/Aside'
import SiteTitle from 'elements/SiteTitle'

class LabelsPage extends Component {
  render () {
    return (
      <Row type='flex'>
        <SiteTitle>所有文章</SiteTitle>
        <Aside />
        <Lables />
      </Row>
    )
  }
}

export default LabelsPage