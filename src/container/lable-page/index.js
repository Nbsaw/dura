import React, { Component } from 'react'

class LabelPage extends Component {
  render () {
    const { match } = this.props
    return (
      <p>{match.params.number}</p>
    )
  }
}

export default LabelPage