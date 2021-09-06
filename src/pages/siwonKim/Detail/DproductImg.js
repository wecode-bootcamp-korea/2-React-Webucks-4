import React, { Component } from 'react';
import './DproductImg.scss';

class DproductImg extends Component {
  render() {
    return (
      <img src={this.props.src} alt={this.props.name} className='DproductImg' />
    );
  }
}

export default DproductImg;
