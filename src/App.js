import React, { Component } from 'react'

import './App.css'
import Card from 'antd/lib/card'

import { githubAPi } from './api'

class App extends Component {
  render() {
    let data = githubAPi.getAll({
      username: 'Nbsaw',
      repo: 'notes'
    })
    
    return (
      <div>
        <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    );
  }
}

export default App;
