import React, { Component } from 'react';
import DetailFeatureHeader from './DetailFeatureHeader';
import DetailNutritionInfo from './DetailNutritionInfo';
import ReveiwList from '../component/ReviewList';
import './DetailCoffeeFeature.scss';

class DetailCoffeeFeature extends Component {
  render() {
    return (
      <section className='infoContainer'>
        <DetailFeatureHeader description={this.props?.description} />
        <DetailNutritionInfo nutrition={this.props?.nutrition} />
        <ReveiwList />
      </section>
    );
  }
}

export default DetailCoffeeFeature;
