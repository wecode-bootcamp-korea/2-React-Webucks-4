import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DetailTitle.scss';

class DetailTitle extends Component {
  render() {
    return (
      <section>
        <h1>콜드 브루</h1>
        <div className='linktap'>
          <Link to='/login-yebomlee'> 홈 </Link> {'>'}
          <a href='/'> MENU </a> {'>'}
          <Link to='/list-yebomlee'> 음료 </Link> {'>'}
          <a href='/'> 콜드브루 </a> {'>'}
          <a href='/'> 바닐라 크림 콜드 브루</a>
        </div>
      </section>
    );
  }
}

export default DetailTitle;
