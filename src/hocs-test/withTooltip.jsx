import React from 'react';

export default function withTooltip(OriginalComponent) {
  return class NewComponent extends React.Component {
    state = {
      showTooltip: false,
    };
    mouseOver = () => {
      this.setState({ showTooltip: true });
    };

    mouseOut = () => {
      this.setState({ showTooltip: false });
    };
    render() {
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <OriginalComponent showTooltip={this.state.showTooltip} />
        </div>
      );
    }
  };
}
