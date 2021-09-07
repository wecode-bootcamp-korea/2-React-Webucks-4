import React, { Component } from 'react';
import DetailImg from './DetailImg';
import DetailCoffeeInfo from './DetailCoffeeInfo';
import './DetailCoffeeFeature.scss';

class DetailCoffeeFeature extends Component {
  render() {
    return (
      <article className='coffeeInfoContainer'>
        <DetailImg description={this.props?.description} />
        <DetailCoffeeInfo
          description={this.props?.description}
          nutrition={this.props?.nutrition}
        />
      </article>
    );
  }
}

export default DetailCoffeeFeature;
