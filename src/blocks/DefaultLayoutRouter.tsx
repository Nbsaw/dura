import React, { Component } from 'react';
import { Route } from 'react-router';
import styled from 'styled-components';
import { me } from '../constant';
const { NIKENAME, BIO, SOCICAL_LIST } = me;
import { DefaultLayoutRouterProps, DefaultLayoutRouterState } from './types';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  max-width: 1200px;
  margin: auto;
  flex-direction: column;
  &.shink {
    padding-top: 130px;
  }
`;

const Nav = styled.div`
  background: url(https://pics.manqian.com/mq-pim/202001211579576584006.jpg);
  height: 400px;
  background-position: 30% 100%;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.66);
  background-size: cover;
  position: relative;
  z-index: 500;
  &.shink {
    height: 130px;
    position: fixed;
    top: 0px;
    width: 100%;
  }
`;

const Box = styled.div`
  position: relative;
  z-index: 1;
  margin: auto;
  width: 70%;
  padding-top: 20px;
`;

const Box2 = styled.div`
  margin: auto;
  width: 55%;
  padding-top: 20px;
  padding-bottom: 35px;
`;

const Info = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.66), transparent);
`;

const Title = styled.h3`
  color: #ffffff;
  font-size: 45px;
  font-weight: 600;
  margin: 0;
`;

const Quote = styled.p`
  color: #ffffff;
  margin: 0;
`;

const SocicalList = styled.div`
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  text-align: right;
  a {
    display: inline-block;
    color: #ffffff;
  }
  a + a {
    margin-left: 10px;
  }
`;

const Layout = styled.div<{ showAside: boolean }>`
  display: flex;
  flex-direction: column;
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
    showAside: false
  };
  toggleAside() {
    const { showAside } = this.state;
    this.setState({ showAside: !showAside });
  }
  render() {
    const { showAside } = this.state;
    const { component: Component, ...rest } = this.props;
    const isPost = this.props.path === '/posts';

    return (
      <Route
        exact
        {...rest}
        render={matchProps => (
          <Layout showAside={showAside}>
            <Nav className={isPost ? '' : 'shink'}>
              <Box>
                <SocicalList>
                  {SOCICAL_LIST.map((item, idx) => {
                    return (
                      <a key={idx} href={item.link}>
                        {item.key}
                      </a>
                    );
                  })}
                </SocicalList>
              </Box>
              <Info>
                <Box2>
                  <Title>BLOG @ {NIKENAME}</Title>
                  <Quote>{BIO}</Quote>
                </Box2>
              </Info>
            </Nav>
            <Container className={isPost ? '' : 'shink'}>
              <Component {...matchProps} />
            </Container>
          </Layout>
        )}
      />
    );
  }
}

export default DefaultLayoutRouter;
