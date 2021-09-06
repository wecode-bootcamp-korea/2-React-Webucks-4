import React, { Component } from 'react';
import TopsNav from '../component/TopsNav';
import DetailSubHeader from './DetailSubHeader';
import DetailCoffeeInfo from './DetailCoffeeInfo';
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
    return (
      <>
        <section className='Detail'>
          <TopsNav />
          <DetailSubHeader category={this.state.products[3]?.category} />
          <DetailCoffeeInfo
            description={this.state.products[3]}
            nutrition={this.state.products[3]?.nutritionFacts}
          />
        </section>
        <Footer />
      </>
    );
  }
}

export default Detail;
