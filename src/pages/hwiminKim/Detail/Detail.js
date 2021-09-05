import React, { Component } from 'react';
import TopsNav from '../component/TopsNav';
import DetailSubHeader from './DetailSubHeader';
import DetailCoffeeInfo from './DetailCoffeeInfo';
import Footer from '../component/Footer';
import { DETAILS } from '../data/PRODUCT_INFO';
import './Detail.scss';

class Detail extends Component {
  render() {
    const productDesc = DETAILS[4];
    const productNutrition = DETAILS[4].nutritionFacts;

    return (
      <>
        <section className='Detail'>
          <TopsNav />
          <DetailSubHeader description={productDesc} />
          <DetailCoffeeInfo
            description={productDesc}
            nutrition={productNutrition}
          />
        </section>
        <Footer />
      </>
    );
  }
}

export default Detail;
