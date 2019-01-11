import React, { Component } from 'react';
import { Route } from 'react-router';
import styled from 'styled-components';

import Aside from '../blocks/Aside';
import Container from '../blocks/Container';

import { DefaultLayoutRouterProps, DefaultLayoutRouterState } from './types';

const Layout =
  styled.div <
  { showAside: boolean } >
  `
  display: flex;
  transition: 300ms ease-in-out;
  transform: ${props =>
    props.showAside ? 'translateX(260px)' : 'translateX(0px)'};
`;

// Page Layout
class DefaultLayoutRouter extends Component<
  DefaultLayoutRouterProps,
  DefaultLayoutRouterState
> {
  constructor(props: DefaultLayoutRouterProps) {
    super(props);
    this.toggleAside = this.toggleAside.bind(this);
  }
  state = {
    showAside: false,
  };
  toggleAside() {
    const { showAside } = this.state;
    this.setState({ showAside: !showAside });
  }
  render() {
    const { showAside } = this.state;
    const { component: Component, ...rest } = this.props;

    return (
      <Route
        exact
        {...rest}
        render={matchProps => (
          <Layout showAside={showAside}>
            <Aside />
            <Container>
              <Component {...matchProps} />
            </Container>
          </Layout>
        )}
      />
    );
  }
}

export default DefaultLayoutRouter;
