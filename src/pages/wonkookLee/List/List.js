import React, { Component } from 'react';
import { addListBodyStyle, removeListBodyStyle } from '../utils';
import TopNav from '../../../components/Nav/TopNav';
import ProductList from './components/ProductList';
import Footer from '../../../components/Footer/Footer';
import './List.scss';

class List extends Component {
  componentDidMount() {
    addListBodyStyle();
  }

  componentWillUnmount() {
    removeListBodyStyle();
  }

  render() {
    return (
      <div id='wrap'>
        <TopNav />
        <div id='container'>
          <div className='sub_tit_wrap'>
            <div className='sub_tit_inner'>
              <h2>
                <img
                  src='https://image.istarbucks.co.kr/common/img/menu/menu_tit1.jpg'
                  alt='음료'
                />
              </h2>
            </div>
          </div>
          <div className='content'>
            <div className='product_kind_wrap'></div>
            <div className='product_result_wrap product_result_wrap01'>
              <div className='product_view_tab_wrap'>
                <dl className='product_view_tab product_view_tab01'>
                  <dt className='dt1'></dt>
                  <dd>
                    <ProductList />
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default List;
