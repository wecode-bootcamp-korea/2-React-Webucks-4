import React, { Component } from 'react';
import DetailImg from './DetailImg';
import DetailCoffeeFeature from './DetailCoffeeFeature';
import './DetailCoffeeInfo.scss';

class DetailCoffeeInfo extends Component {
  render() {
    return (
      <article className='coffeeInfoContainer'>
        <DetailImg description={this.props.description} />
        <DetailCoffeeFeature
          description={this.props?.description}
          nutrition={this.props?.nutrition}
        />
      </article>
    );
  }
}

export default DetailCoffeeInfo;
