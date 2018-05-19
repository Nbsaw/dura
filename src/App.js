import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router'

import HomePage from './container/home-page'
import AboutPage from './container/about-page'
import ArchivesPage from './container/archives-page'
import ClosedPage from './container/closed-page'
import LabelPage from './container/lable-page'
import LabelsPage from './container/lables-page'
import TimeLinePage from './container/timeline-page'
import NotFoundPage from './container/not-found-page'
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
