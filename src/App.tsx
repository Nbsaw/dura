import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import qs from 'qs';
import { withRouter } from 'react-router';
import { githubApi } from './api';

// using webpack import syntax up performance
import AsyncComponent from './hoc/AsyncComponent';

// Basic Component
// import DefaultLayoutRouter from './blocks/DefaultLayoutRouter';

// types
import { History } from 'history';
import { RouteComponentProps } from 'react-router';

const HomePage = AsyncComponent(() => import('./pages/HomePage'));
// const AboutPage = AsyncComponent(() => import('./pages/AboutPage'));
// const ArchivesPage = AsyncComponent(() => import('./pages/ArchivesPage'));
// const PostPage = AsyncComponent(() => import('./pages/PostPage'));
// const PostsPage = AsyncComponent(() => import('./pages/PostsPage'));
// const TimeLinePage = AsyncComponent(() => import('./pages/TimelinePage'));
// const WorksPage = AsyncComponent(() => import('./pages/WorksPage'));
// const NotFoundPage = AsyncComponent(() => import('./pages/NotFoundPage'));
// const CommentPage = AsyncComponent(() => import('./pages/CommentPage'));

type AppProps = RouteComponentProps;
type AppState = {};

class App extends Component<AppProps, AppState> {
  async componentDidMount() {
    const redirect_uri = localStorage.getItem('redirect_uri');
    let { code } = qs.parse(window.location.search.substr(1));
    if (code) {
      localStorage.removeItem('redirect_uri');
      code = code.replace('code=', '');
      localStorage.setItem(
        'accessToken',
        await githubApi.user.getAccessToken(code)
      );
    }
    redirect_uri && this.props.history.replace(redirect_uri);
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/about" component={AboutPage}  /> */}
        {/* <Route exact path="/archives" component={ArchivesPage}  /> */}
        {/* <Route exact path="/closed" component={ClosedPage}  /> */}
        {/* TO TYPESCRIPT ⬇ */}
        {/* <DefaultLayoutRouter exact path="/posts" component={PostsPage} /> */}
        {/* <DefaultLayoutRouter exact path="/post/:number" component={PostPage} /> */}
        {/* <DefaultLayoutRouter exact path="/timeline" component={TimeLinePage} /> */}
        {/* <DefaultLayoutRouter exact path="/works" component={WorksPage} /> */}
        {/* <DefaultLayoutRouter exact path="/comment" component={CommentPage} /> */}
        {/* <DefaultLayoutRouter component={NotFoundPage} /> */}
      </Switch>
    );
  }
}

export default withRouter(App);
