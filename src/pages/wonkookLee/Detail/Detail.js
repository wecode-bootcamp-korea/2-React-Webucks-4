import React, { Component } from 'react';
import { addDetailBodyStyle, removeDetailBodyStyle } from '../utils';
import TopNav from '../../../components/Nav/TopNav';
import Footer from '../../../components/Footer/Footer';
import MainImgFrame from './components/MainImgFrame';
import ProdDesc from './components/ProdDesc';
import Comment from './components/Comment';
import BreadCrumb from './components/BreadCrumb';
import './Detail.scss';

class Detail extends Component {
  componentDidMount() {
    addDetailBodyStyle();
  }

  componentWillUnmount() {
    removeDetailBodyStyle();
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
                  src='https://image.istarbucks.co.kr/common/img/menu/tit/drink_tit9.png'
                  alt='콜드 브루'
                />
              </h2>
              <BreadCrumb />
            </div>
          </div>

          <div className='content'>
            <div className='product_view_wrap1 clearfix'>
              <MainImgFrame />
              <ProdDesc />
              <Comment />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Detail;
