import React, { Component } from 'react';
import ProductList from './components/ProductList';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div id='wrap List'>
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
      </div>
    );
  }
}

export default List;
