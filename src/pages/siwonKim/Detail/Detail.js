import React, { Component } from 'react';
import TopNav from '../TopNav';
import ProductTitle from './ProductTitle';
import DproductImg from './DproductImg';
import DeInfo from './DeInfo';
import Allergen from './Allergen';
import Review from './Review';
import Footer from './Footer';
import DATA from '../PRODUCT_INFO';

import '../Detail/Detail.scss';

class Detail extends Component {
  render() {
    const data = DATA.find(item => item.id === this.props.match.params.id * 1);

    return (
      <div className='Detail'>
        <TopNav />
        <div className='body'>
          <ProductTitle category={data.category} name={data.name} />
          <div className='bodyWrap'>
            <DproductImg src={data.imgUrl} alt={data.name} />
            <section className='productInfo'>
              <DeInfo data={data} />
              {data.nutritionFacts.allergen ? (
                <Allergen allergen={data.nutritionFacts.allergen} />
              ) : null}
              <Review />
            </section>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Detail;
