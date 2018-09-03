import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Desc = styled.p`
  margin-top: 30px;
  font-size: 20px;
`;

class NotFoundPage extends Component {
  render() {
    return (
      <Container>
        <img src={require('assets/not-thing.png')} />
        <Desc>这里啥也没有 ... 点击侧栏的Blog试试吧 ...</Desc>
      </Container>
    );
  }
}

export default NotFoundPage;
