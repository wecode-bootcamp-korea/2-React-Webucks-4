import React, { Component } from 'react';
import TopsNav from '../component/TopsNav';
import DetailCategoryHeader from './DetailCategoryHeader';
import DetailCoffeeInfo from './DetailCoffeeFeature';
import Footer from '../component/Footer';
import './Detail.scss';

class Detail extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/PRODUCT_INFO.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ products: data });
      });
  }

  render() {
    const product = this.state.products[4];
    return (
      <>
        <section className='Detail'>
          <TopsNav />
          <DetailCategoryHeader description={product} />
          <DetailCoffeeInfo
            description={product}
            nutrition={product?.nutritionFacts}
          />
        </section>
        <Footer />
      </>
    );
  }
}

export default Detail;
