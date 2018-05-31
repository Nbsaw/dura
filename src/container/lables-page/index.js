import React, { Component } from 'react'
import Row from 'antd/lib/row'

import Lables from '../../components/lables'
import Aside from '../../components/layout/aside'

class LabelsPage extends Component {
  render () {
    return (
      <Row type='flex'>
        <Aside />
        <Lables />
      </Row>
    )
  }
}

export default LabelsPage