import React from 'react';




export default class Container extends React.Component {
  render() {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    )
  }
}