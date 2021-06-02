import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error) {
    console.log(error);
  }
  render() {
    if (this.state.hasError) return <h1>Something went wrong</h1>;
    return <div> {this.props.children}</div>;
  }
}
