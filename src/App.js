import React, { Component } from 'react'
import './css/App.css'
import { Route, Switch } from 'react-router'
// using webpack import syntax up performance
import AsyncComponent from 'hoc/AsyncComponent'

// Basic Component
import Row from 'antd/lib/row'
import Aside from 'blocks/Aside'
import Container from 'blocks/Container'

// Page Layout
const DefaultLayoutRouter = ({component: Component, ...rest}) => (
  <Route exact {...rest} render={
    matchProps => (
      <Row type="flex">
        <Aside />
        <Container>
          <Component {...matchProps} />
        </Container>
      </Row>
    )
  }/>
)

const HomePage = AsyncComponent(() => import('page/HomePage'))
const AboutPage = AsyncComponent(() => import('page/AboutPage'))
const ArchivesPage = AsyncComponent(() => import('page/ArchivesPage'))
const ClosedPage = AsyncComponent(() => import('page/ClosedPage'))
const PostPage = AsyncComponent(() => import('page/PostPage'))
const PostsPage = AsyncComponent(() => import('page/PostsPage'))
const TimeLinePage = AsyncComponent(() => import('page/TimelinePage'))
const NotFoundPage = AsyncComponent(() => import('page/NotFoundPage'))

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}  />
        {/* <Route exact path="/about" component={AboutPage}  /> */}
        {/* <Route exact path="/archives" component={ArchivesPage}  /> */}
        {/* <Route exact path="/closed" component={ClosedPage}  /> */}
        <DefaultLayoutRouter exact path="/posts" component={PostsPage}  />
        <DefaultLayoutRouter exact path="/post/:number" component={PostPage}  />
        {/* <Route exact path="/timeline" component={TimeLinePage} /> */}
        <DefaultLayoutRouter component={NotFoundPage} />
      </Switch>
    )
  }
}

export default App;
