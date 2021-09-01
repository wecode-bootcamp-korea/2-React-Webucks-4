import React, { Component } from 'react';
import { addDetailBodyStyle, removeDetailBodyStyle } from '../utils';
import TopNav from '../../../components/Nav/TopNav';
import Footer from '../../../components/Footer/Footer';
import MainImgFrame from './components/MainImgFrame';
import ProdDesc from './components/ProdDesc';
import Comment from './components/Comment';
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
          {/* 서브 타이틀 */}
          <div className='sub_tit_wrap'>
            <div className='sub_tit_inner'>
              <h2>
                <img
                  src='https://image.istarbucks.co.kr/common/img/menu/tit/drink_tit9.png'
                  alt='콜드 브루'
                />
              </h2>
              <ul className='smap'>
                <li>
                  <a href='http://localhost:3000'>.</a>
                </li>
                <li></li>
                <li>
                  <a href='http://localhost:3000'>MENU</a>
                </li>
                <li></li>
                <li>
                  <a href='http://localhost:3000'>음료</a>
                </li>
                <li></li>
                <li>
                  <a href='http://localhost:3000'>콜드 브루</a>
                </li>
                <li></li>
                <li>
                  <a href='http://localhost:3000'>
                    <strong>제주 비자림 콜드 브루</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* 서브 타이틀 end */}

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
