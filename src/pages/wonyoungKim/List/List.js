import React, { Component } from 'react';
import TopsNav from '../../../components/TopsNav/TopsNav.js';
import CoffeeData from './CoffeeData.js';
import CoffeeData2 from './CoffeeData2.js';
import CoffeeCard from './CoffeeCard.js';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div>
        <TopsNav />
        <section className='menubar1'>
          <p className='subMenu'>
            <span className='subTitle'>콜드 브루 커피</span>
            <img
              className='coffeeIcon'
              alt='logo'
              src='/images/coffee_icon.PNG'
            />
            디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
          </p>
        </section>
        <section className='menuList'>
          {CoffeeData.map(product => {
            return <CoffeeCard img={product.img} Name={product.Name} />;
          })}
        </section>
        <section className='menubar2'>
          <p className='subMenu'>
            <span className='subTitle'>브루드 커피</span>
            <img
              className='coffeeIcon'
              src='/images/coffee_icon.PNG'
              alt='coffee'
            />
            디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
          </p>
        </section>
        <section className='menuList'>
          {CoffeeData2.map(product => {
            return <CoffeeCard img={product.img} Name={product.Name} />;
          })}
        </section>
      </div>
    );
  }
}

export default List;
