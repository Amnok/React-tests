import React from 'react';

export default function withClick(PComponent) {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };
    }

    onClickHandler = () => {
      this.setState({ counter: this.state.counter + 1 });
    };

    render() {
      return (
        <PComponent
          counter={this.state.counter}
          handler={this.onClickHandler}
        />
      );
    }
  }
  return NewComponent;
}
