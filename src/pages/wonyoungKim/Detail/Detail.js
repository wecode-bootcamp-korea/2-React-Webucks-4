import React, { Component } from 'react';
import TopsNav from '../../../components/TopsNav/TopsNav.js';
import DetailInfo from './components/DetailInfo.js';
import HeartLike from './components/HeartLike.js';
import DetailReview from './components/DetailReview.js';
import Footer from './components/Footer.js';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <>
        <TopsNav />
        <article className='topbar'>
          <h2>콜드 브루</h2>
          <p>
            홈 &gt; MENU &gt; 음료 &gt; 콜드 브루 &gt; 시그니처 더 블랙 콜드브루
          </p>
        </article>
        <section className='menu'>
          <img className='mainPic' alt='coldbrew' />
          <section className='detail'>
            <div className='title'>
              <HeartLike />
              <p className='nameKo'>시그니처 더 블랙 콜드 브루</p>
              <p className='nameEn'>Signature The Bloack Cold Brew</p>
            </div>
            <DetailInfo />
            <DetailReview />
          </section>
        </section>
        <Footer />
      </>
    );
  }
}

export default Detail;
