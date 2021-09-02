import React, { Component } from 'react';
import './DetailSubHeader.scss';
class DetailSubHeader extends Component {
  render() {
    return (
      <header className='DetailSubHeader'>
        <h1>{this.props.description.category}</h1>
        <ul className='subHeaderItems'>
          <li>
            <a href='#'>홈</a>
          </li>
          <li>
            <i className='fas fa-chevron-right'></i>
          </li>
          <li>
            <a href='#'>MENU</a>
          </li>
          <li>
            <i className='fas fa-chevron-right'></i>
          </li>
          <li>
            <a href='#'>음료</a>
          </li>
          <li>
            <i className='fas fa-chevron-right'></i>
          </li>
          <li>
            <a href='#'>에스프레소</a>
          </li>
          <li>
            <i className='fas fa-chevron-right'></i>
          </li>
          <li>
            <a href='#'>나이트로 바닐라 크림</a>
          </li>
        </ul>
      </header>
    );
  }
}
export default DetailSubHeader;
