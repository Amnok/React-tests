import React, { Component } from 'react';
import withLoader from './withLoader';

class Component2 extends Component {
  state = {
    isLoading: false,
  };
  async componentDidMount() {
    this.setState({ isLoading: true });
    const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
      (res) => res.json()
    );
    console.log(res);
    this.setState({ data: res, isLoading: false });
  }
  render() {
    return null;
  }
}

export default withLoader(Component2);
