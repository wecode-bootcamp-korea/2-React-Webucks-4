import React, { Component } from 'react';
import TopNav from '../TopNav';
import CateTitle from './CateTitle';
import ProductList from './ProductList';

import DATA from '../ITEMS';

import '../List/List.scss';

class List extends Component {
  render() {
    return (
      <div className='List'>
        <TopNav />
        <div className='liner'>
          <CateTitle cate='콜드 브루 커피' />
          <div className='productList'>
            {DATA.coldBrews.map(data => {
              return <ProductList data={data} />;
            })}
          </div>
          <CateTitle cate='브루드 커피' />
          <div className='productList'>
            {DATA.breweds.map(data => {
              return <ProductList data={data} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default List;
