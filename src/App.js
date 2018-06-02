import React, { Component } from 'react'
import './css/App.css'
import { Route, Switch } from 'react-router'

import HomePage from './container/HomePage'
import AboutPage from './container/AboutPage'
import ArchivesPage from './container/ArchivesPage'
import ClosedPage from './container/ClosedPage'
import LabelPage from './container/LablePage'
import LabelsPage from './container/LablesPage'
import TimeLinePage from './container/TimelinePage'
import NotFoundPage from './container/NotFoundPage'

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
