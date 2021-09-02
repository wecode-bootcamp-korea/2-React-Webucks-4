import React, { Component } from 'react';
import TopsNav from '../component/TopsNav';
import SubHeader from './ListSubHeader';
import CoffeeList from './CoffeeList';
import { BEVERAGES } from '../data/ITEMS';
import './List.scss';

class List extends Component {
  render() {
    const COLDBREW_PRODUCTS = BEVERAGES.coldBrews;
    const BREW_PRODUCTS = BEVERAGES.breweds;
    return (
      <section className='List'>
        {/*main header*/}
        <TopsNav />
        <SubHeader category={'콜드 브루 커피'} />
        {/*coldbrew list*/}
        <CoffeeList productData={COLDBREW_PRODUCTS} />
        {/* sub header */}
        <SubHeader category={'브루드 커피'} />
        {/* brewed list */}
        <CoffeeList productData={BREW_PRODUCTS} />
      </section>
    );
  }
}

export default List;
