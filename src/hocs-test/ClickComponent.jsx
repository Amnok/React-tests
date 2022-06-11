import React, { Component } from 'react';
import withClick from './withClick';

class ClickComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handler}>
          Value is {this.props.counter}
        </button>
      </div>
    );
  }
}
export default withClick(ClickComponent);
