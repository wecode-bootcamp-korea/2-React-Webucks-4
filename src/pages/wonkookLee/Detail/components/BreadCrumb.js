import React, { Component } from 'react';
import './BreadCrumb.scss';

class BreadCrumb extends Component {
  render() {
    return (
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
    );
  }
}

export default BreadCrumb;
