import React, { Component } from 'react';
import cfIcon from './coffei.png';
import './CateTitle.scss';

class CateTitle extends Component {
  render() {
    const { cate } = this.props;

    return (
      <section className='cateTitle'>
        <div className='titleWraper'>
          <h2 className='coldTitle'>{cate}</h2>
          <img className='coffeei' src={cfIcon} alt='커피아이콘' />
          <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
        </div>
      </section>
    );
  }
}

export default CateTitle;
