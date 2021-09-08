import React, { Component } from 'react';
import './ProductTitle.scss';

class ProductTitle extends Component {
  render() {
    const { category, name } = this.props;

    return (
      <div className='ProductTitle'>
        <h1 className='groupName'>{category}</h1>
        <span className='category'>
          홈 &#62; MENU &#62; 음료 &#62; {category} &#62; {name}
        </span>
      </div>
    );
  }
}

export default ProductTitle;
