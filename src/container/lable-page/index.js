import React, { Component } from 'react'
import MarkdownIt from 'markdown-it'
import { githubApi, github } from '../../api'

const md = MarkdownIt()

class LabelPage extends Component {
  state = {
    content: ''
  }
  async componentDidMount () {
    const { match } = this.props
    const result = await githubApi.issues.getDetails({
      username: 'Nbsaw',
      repo: 'notes',
      number: match.params.number
    })
    const content = md.render(result.body)
    this.setState({ content })
  }
  render () {
    return (
      <p dangerouslySetInnerHTML={{ __html: this.state.content }} />
    )
  }
}

export default LabelPage