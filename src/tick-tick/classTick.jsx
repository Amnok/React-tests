import React, { Component } from 'react';

export default class ClassTick extends Component {
  state = {
    time: new Date().toLocaleString(),
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleString() });
    }, 1000);
  }
  render() {
    const { time } = this.state;
    return (
      <React.Fragment>
        <div>{time}</div>
        <h1>Hello</h1>
      </React.Fragment>
    );
  }
}
