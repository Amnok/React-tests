import React from 'react';

export default function withLoader(OriginalComponent) {
  return class NewComponent extends React.Component {
    render() {
      //   if (this.props.isLoading) {
      //     return 'Loading...';
      //   }
      //   if (this.props.data.length === 0) return 'No data Available';
      return <OriginalComponent {...this.props} />;
    }
  };
}
