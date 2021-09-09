import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CategoryHeader.scss';

class CategoryHeader extends Component {
  render() {
    return (
      <dt className='ProductHeader'>
        <Link to='/list-wonkooklee'>{this.props.category}</Link>
        <i>
          <img
            src='https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png'
            alt='카테고리'
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
