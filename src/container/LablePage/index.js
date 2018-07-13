// @flow
import React, { Component } from 'react'
import MarkdownIt from 'markdown-it'
import _ from 'lodash'
import styled from 'styled-components'
import Row from 'antd/lib/row'

import Aside from 'blocks/Layout/Aside'
import SiteTitle from 'elements/SiteTitle'
import PostLoader from 'blocks/PosterLoader'
import { USERNAME, REPO } from '../../constant'
import { githubApi } from '../../api'

type Props = { match: { params: { number: number } } }
type State = { postTitle: string, content: string }

const md = MarkdownIt()

const Container = styled.div`
  flex: 1;
  height: 100vh;
  overflow: auto;
`

class LabelPage extends Component<Props,State> {
  state = {
    postTitle: '',
    content: '',
    load: false
  }
  async componentDidMount () {
    const { match } = this.props
    const result = await githubApi.issues.getDetails({
      username: USERNAME,
      repo: REPO,
      number: match.params.number
    })
    const dom = document.createElement('div')
    dom.innerHTML = md.render(result.body)
    // highlight code
    _.forEach(dom.getElementsByTagName('pre'),elm => window.hljs.highlightBlock(elm))
    this.setState({ content: dom.innerHTML, postTitle: result.title, load: true })
  }
  render () {
    return (
      <Row type="flex">
        <Aside />
        <Container className='content'>
          {
            this.state.load 
            ? (
              <React.Fragment>
                <SiteTitle>{ this.state.postTitle }</SiteTitle>
                <h2>{ this.state.postTitle }</h2>
                <p dangerouslySetInnerHTML={{ __html: this.state.content }} />
              </React.Fragment>
            ) 
            : (
              <React.Fragment>
                <SiteTitle> 文章加载中 ...  </SiteTitle>
                <PostLoader />
              </React.Fragment>
            )
          }
        </Container>
      </Row>
    )
  }
}

export default LabelPage