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
    fetch('http://localhost:3000/data/PRODUCT_INFO.json', {})
      .then(res => res.json())
      .then(data => {
        this.setState({ products: data });
      });
  }

  changeHeartBtnColor = id => {
    const products = this.state.products.map(item => {
      return item.id === id
        ? {
            ...item,
            isLiked: !item.isLiked,
          }
        : item;
    });
    this.setState({ products });
  };

  render() {
    let productData = this.state.products[8];
    if (!productData)
      productData = {
        category: '',
        name: '',
        imgUrl: '',
        desc: '',
        nutritionFacts: { allergen: '' },
      };
    return (
      <>
        <TopsNav />
        <section className='Detail'>
          <DetailCategoryHeader productData={productData} />
          <DetailCoffeeInfo
            productData={productData}
            changeHeartBtnColor={this.changeHeartBtnColor}
          />
        </section>
        <Footer />
      </>
    );
  }
}

export default Detail;
