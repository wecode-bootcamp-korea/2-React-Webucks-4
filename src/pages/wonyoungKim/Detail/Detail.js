import React, { Component } from 'react';
import TopsNav from '../../../components/TopsNav/TopsNav.js';
import './Detail.scss';
import DetailInfo from './DetailInfo.js';
import DetailReview from './DetailReview.js';
import DetailFooter from './DetailFooter.js';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnColor: false,
    };
  }

  btnChangeHandler = () => {
    this.state.btnColor
      ? this.setState({ btnColor: false })
      : this.setState({ btnColor: true });
  };

  render() {
    return (
      <>
        <TopsNav />
        <article className='menubar'>
          <h1>콜드 브루</h1>
          <p>
            홈 {'>'} MENU {'>'} 음료 {'>'} 콜드 브루 {'>'} 시그니처 더 블랙 콜드
            브루
          </p>
        </article>
        <section className='menu'>
          <img
            className='mainPic'
            alt='coldbrew'
            src='/images/시그니처더블랙콜드브루.jpg'
          />
          <section className='Detail'>
            <div className='Title'>
              <button onClick={this.btnChangeHandler}>
                {this.state.btnColor ? (
                  <img src='/images/heartRed.png' />
                ) : (
                  <img src='/images/heart.png' />
                )}
              </button>
              <p className='nameKo'>시그니처 더 블랙 콜드 브루</p>
              <p className='nameEn'>Signature The Bloack Cold Brew</p>
            </div>
            <DetailInfo />
            <DetailReview />
          </section>
        </section>
        <footer>
          <DetailFooter />
        </footer>
      </>
    );
  }
}

export default Detail;
