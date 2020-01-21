import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
// import qs from 'qs';
import { withRouter } from 'react-router';
// import { githubApi } from './api';

// using webpack import syntax up performance
import AsyncComponent from './hoc/AsyncComponent';

// Basic Component
import DefaultLayoutRouter from './blocks/DefaultLayoutRouter';

// types
import { RouteComponentProps } from 'react-router';

const HomePage = AsyncComponent(() => import('./pages/HomePage'));
const AboutPage = AsyncComponent(() => import('./pages/AboutPage'));
// const ArchivesPage = AsyncComponent(() => import('./pages/ArchivesPage'));
const PostPage = AsyncComponent(() => import('./pages/PostPage'));
const PostsPage = AsyncComponent(() => import('./pages/PostsPage'));
const TagsPage = AsyncComponent(() => import('./pages/TagsPage'));
const TimeLinePage = AsyncComponent(() =>
  import('./pages/TimelinePage/components/RenderTimeLine')
);
const WorksPage = AsyncComponent(() => import('./pages/WorksPage'));
// const CommentPage = AsyncComponent(() => import('./pages/CommentPage'));
const NotFoundPage = AsyncComponent(() => import('./pages/NotFoundPage'));

type AppProps = RouteComponentProps;
type AppState = {};

class App extends Component<AppProps, AppState> {
  componentDidMount() {
    this.props.history.listen(() => {
      window.scrollTo(0, 0);
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <DefaultLayoutRouter exact path="/about" component={AboutPage} />
        {/* <Route exact path="/archives" component={ArchivesPage}  /> */}
        {/* TO TYPESCRIPT ⬇ */}
        <DefaultLayoutRouter exact path="/posts" component={PostsPage} />
        <DefaultLayoutRouter exact path="/tags" component={TagsPage} />
        <DefaultLayoutRouter exact path="/post/:number" component={PostPage} />
        <DefaultLayoutRouter exact path="/timeline" component={TimeLinePage} />
        <DefaultLayoutRouter exact path="/works" component={WorksPage} />
        {/* <DefaultLayoutRouter exact path="/comment" component={CommentPage} /> */}
        <DefaultLayoutRouter component={NotFoundPage} />
      </Switch>
    );
  }
}

export default withRouter(App);
