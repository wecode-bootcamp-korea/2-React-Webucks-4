import React, { Component } from 'react';
import './ProductTitle.scss';

class ProductTitle extends Component {
  render() {
    const { category, name } = this.props;

    return (
      <div className='ProductTitle'>
        <h1 className='groupName'>{category}</h1>
        <span className='category'>
          홈 {'>'} MENU {'>'} 음료 {'>'} {category} {'>'} {name}
        </span>
      </div>
    );
  }
}

export default ProductTitle;
