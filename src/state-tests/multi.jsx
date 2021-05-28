import React, { Component } from 'react';

export default class Multi extends Component {
  state = {
    value: 0,
  };
  increment = () => {
    this.setState((state, props) => ({ value: state.value + 1 }));
    this.setState((state, props) => ({ value: state.value + 1 }));
  };
  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment by 5</button>
        value :- {this.state.value}
      </div>
    );
  }
}
