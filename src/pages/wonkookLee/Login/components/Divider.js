import React, { Component } from 'react';
import './Divider.scss';

class Divider extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <hr />
        <span>{this.props.text}</span>
      </div>
    );
  }
}

export default Divider;
