import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log('Logging eror', error);
  }
  render() {
    if (this.state.hasError) return <h1>Something went wrong</h1>;
    return <div> {this.props.children}</div>;
  }
}
