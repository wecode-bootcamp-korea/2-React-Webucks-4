import React, { Component } from 'react';
import './DetailCoffeeFeature.scss';
import DetailFeatureHeader from './DetailFeatureHeader';
import DetailNutritionInfo from './DetailNutritionInfo';
import ReveiwList from '../component/ReviewList';

class DetailCoffeeFeature extends Component {
  render() {
    return (
      <section className='infoContainer'>
        <DetailFeatureHeader description={this.props.description} />
        <DetailNutritionInfo nutrition={this.props.nutrition} />
        <ReveiwList />
      </section>
    );
  }
}

export default DetailCoffeeFeature;
