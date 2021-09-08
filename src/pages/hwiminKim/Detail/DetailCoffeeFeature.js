import React, { Component } from 'react';
import DetailImg from './DetailImg';
import DetailCoffeeInfo from './DetailCoffeeInfo';
import './DetailCoffeeFeature.scss';

class DetailCoffeeFeature extends Component {
  render() {
    const productData = this.props?.productData;
    return (
      <article className='coffeeInfoContainer'>
        <DetailImg productData={productData} />
        <DetailCoffeeInfo productData={productData} />
      </article>
    );
  }
}

export default DetailCoffeeFeature;
