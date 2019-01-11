import React, { Component } from 'react';

interface AsyncComponentState {
  component?: React.ComponentClass | React.StatelessComponent;
}

export default function asyncComponent(ImportComponent: () => Promise<any>) {
  class AsyncComponent extends Component<any, AsyncComponentState> {
    constructor(props: any) {
      super(props);
      this.state = {
        component: undefined,
      };
    }
    async componentDidMount() {
      const { default: component } = await ImportComponent();
      this.setState({ component });
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}
