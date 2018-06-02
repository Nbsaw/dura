import React, { Component } from 'react'
import Row from 'antd/lib/row'

import Lables from 'blocks/Lables'
import Aside from 'blocks/Layout/Aside'

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