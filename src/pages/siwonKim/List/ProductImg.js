import React, { Component } from 'react';
import './ProductImg.scss';

class ProductImg extends Component {
  render() {
    return (
      <div class='productImg'>
        <img
          src={this.props.Url}
          alt={this.props.name}
          className='boxElements'
        />
      </div>
    );
  }
}

export default ProductImg;
