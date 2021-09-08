import React, { Component } from 'react';
import './DetailCoffeeImg.scss';

class DetailCoffeeImg extends Component {
  render() {
    return (
      <picture className='DetailCoffeeImg'>
        <img
          className='coffeeImg'
          alt={this.props.name}
          src={this.props.imgUrl}
        />
      </picture>
    );
  }
}

export default DetailCoffeeImg;
