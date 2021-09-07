import React, { Component } from 'react';
import './DetailCoffeeImg.scss';

class DetailCoffeeImg extends Component {
  render() {
    return (
      <img
        className='coffeeImg'
        alt='바닐라 크림 콜드 브루'
        src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319174.jpg'
      />
    );
  }
}

export default DetailCoffeeImg;
