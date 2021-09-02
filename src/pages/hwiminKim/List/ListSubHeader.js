import React, { Component } from 'react';
import './ListSubHeader.scss';

class SubHeader extends Component {
  render() {
    return (
      <header className='subHeader'>
        <h4 className='subHeaderTitle'>{this.props.category}</h4>
        <div className='addShot'>
          <img
            alt='decaf logo'
            src='https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png'
          />
          <p className='addShotDesc'>디카페인 에스프레소 샷 추가 가능</p>
        </div>
      </header>
    );
  }
}

export default SubHeader;
