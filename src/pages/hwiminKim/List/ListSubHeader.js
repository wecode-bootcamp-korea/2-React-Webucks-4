import React, { Component } from 'react';
import './ListSubHeader.scss';

class SubHeader extends Component {
  render() {
    const category = this.props.category;
    return (
      <header className='ListSubHeader'>
        <h4 className='subHeaderTitle'>{category}</h4>
        <div className='addShot'>
          <img
            alt='decaf logo'
            src='https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png'
            className='logo'
          />
          <p className='addShotDesc'>디카페인 에스프레소 샷 추가 가능</p>
        </div>
      </header>
    );
  }
}

export default SubHeader;
