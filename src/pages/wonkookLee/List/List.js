import React, { Component } from 'react';
import TopNav from '../../../components/Nav/TopNav';
import ProductList from './components/ProductList';
import Footer from '../../../components/Footer/Footer';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div id='wrap List'>
        <TopNav />
        <div id='container'>
          <div className='subTitWrap'>
            <div className='subTitInner'>
              <h2>
                <img
                  src='https://image.istarbucks.co.kr/common/img/menu/menu_tit1.jpg'
                  alt='음료'
                />
              </h2>
            </div>
          </div>
          <ProductList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default List;
