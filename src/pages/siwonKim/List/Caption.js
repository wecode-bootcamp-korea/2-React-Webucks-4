import React, { Component } from 'react';
import './Caption.scss';

class Caption extends Component {
  render() {
    return <span class='caption'>{this.props.name}</span>;
  }
}

export default Caption;
