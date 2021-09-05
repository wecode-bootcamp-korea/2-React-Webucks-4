import React, { Component } from 'react';
import './ProductTitle.scss';

class ProductTitle extends Component {
  render() {
    return (
      <div className='ProductTitle'>
        <h1 className='groupName'>{this.props.category}</h1>
        <span className='category'>
          홈 - MENU - 음료 - {this.props.category} - {this.props.name}
        </span>
      </div>
    );
  }
}

export default ProductTitle;
