import React, { Component } from 'react';
import TopsNav from '../component/TopsNav';
import DetailSubHeader from './DetailSubHeader';
import './Detail.scss';
import Footer from '../component/Footer';
import DetailCoffeeInfo from './DetailCoffeeInfo';
import { DETAILS } from '../data/PRODUCT_INFO';

class Detail extends Component {
  render() {
    const productDesc = DETAILS[6];
    const productNutrition = DETAILS[6].nutritionFacts;

    return (
      <>
        {/* {console.log(productDesc, productNutrition)} */}
        <section className='Detail'>
          {/* main header */}
          <TopsNav />
          {/* sub header */}
          <DetailSubHeader description={productDesc} />
          {/* coffee info */}
          <DetailCoffeeInfo
            description={productDesc}
            nutrition={productNutrition}
          />
        </section>
        {/* footer */}
        <Footer />
      </>
    );
  }
}

export default Detail;
