import React, { Component } from 'react';
import withTooltip from './withTooltip';

class Component1 extends Component {
  render() {
    return <div> hello {this.props.showTooltip && <h1>yes</h1>}</div>;
  }
}

export default withTooltip(Component1);
