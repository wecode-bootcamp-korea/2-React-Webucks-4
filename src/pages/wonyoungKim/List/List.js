import React, { Component } from 'react';
import TopsNav from '../../../components/TopsNav/TopsNav.js';
import Menubar from './component/Menubar.js';
import DETAILS from '../../../components/PRODUCT_INFO.js';
import CoffeeCard from './component/CoffeeCard.js';
import Footer from '../Detail/components/Footer.js';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div>
        <TopsNav />
        <Menubar
          name='콜드브루'
          text='디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)'
        />
        <section className='Coldbrew'>
          {DETAILS.map(product => {
            if (product.category !== '콜드 브루 커피') return null;
            return <CoffeeCard img={product.imgUrl} Name={product.name} />;
          })}
        </section>
        <Menubar
          name='브루드 커피'
          text='디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)'
        />
        <section className='brewed'>
          {DETAILS.map(product => {
            if (product.category !== '브루드 커피') return null;
            return <CoffeeCard img={product.imgUrl} Name={product.name} />;
          })}
        </section>
        <Footer />
      </div>
    );
  }
}

export default List;
