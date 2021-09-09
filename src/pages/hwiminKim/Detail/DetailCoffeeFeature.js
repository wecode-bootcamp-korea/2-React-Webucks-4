import React, { Component } from 'react';
import DetailImg from './DetailImg';
import DetailCoffeeInfo from './DetailCoffeeInfo';
import './DetailCoffeeFeature.scss';

class DetailCoffeeFeature extends Component {
  render() {
    const { productData, changeHeartBtnColor } = this.props;
    const { name, imgUrl } = this.props.productData;
    return (
      <article className='DetailCoffeeFeature'>
        <DetailImg name={name} imgUrl={imgUrl} />
        <DetailCoffeeInfo
          productData={productData}
          changeHeartBtnColor={changeHeartBtnColor}
        />
      </article>
    );
  }
}

export default DetailCoffeeFeature;
