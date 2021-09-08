import React, { Component } from 'react';
import './CategoryHeader.scss';

class CategoryHeader extends Component {
  render() {
    return (
      <dt className='ProductHeader'>
        <a href='/list-wonkooklee'>{this.props.category}</a>
        <i>
          <img
            src='https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png'
            alt={this.props.category}
          />
        </i>
        <span className='summary'>
          디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
        </span>
      </dt>
    );
  }
}

export default CategoryHeader;
