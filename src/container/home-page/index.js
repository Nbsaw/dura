import React, { Component } from 'react'

import Hello from '../../components/hello'

class HomePage extends Component {
  render () {
    return (
      <div>
        <p>It's Home page guy ~</p>
        <Hello />
      </div>
    )
  }
}

export default HomePage