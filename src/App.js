import React, { Component } from 'react'
import './css/App.css'
import { Route, Switch } from 'react-router'

// using webpack import syntax up performance
import AsyncComponent from 'hoc/AsyncComponent'
const HomePage = AsyncComponent(() => import('page/HomePage'))
const AboutPage = AsyncComponent(() => import('page/AboutPage'))
const ArchivesPage = AsyncComponent(() => import('page/ArchivesPage'))
const ClosedPage = AsyncComponent(() => import('page/ClosedPage'))
const LabelPage = AsyncComponent(() => import('page/LablePage'))
const LabelsPage = AsyncComponent(() => import('page/LablesPage'))
const TimeLinePage = AsyncComponent(() => import('page/TimelinePage'))
const NotFoundPage = AsyncComponent(() => import('page/NotFoundPage'))

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}  />
        <Route exact path="/about" component={AboutPage}  />
        <Route exact path="/archives" component={ArchivesPage}  />
        <Route exact path="/closed" component={ClosedPage}  />
        <Route exact path="/labels" component={LabelsPage}  />
        <Route exact path="/label/:number" component={LabelPage}  />
        <Route exact path="/timeline" component={TimeLinePage} />
        <Route component={NotFoundPage} />
      </Switch>
    )
  }
}

export default App;
