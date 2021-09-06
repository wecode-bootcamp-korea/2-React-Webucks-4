import React, { Component } from 'react';
import './BreadCrumb.scss';

class BreadCrumb extends Component {
  render() {
    return (
      <ul className='smap'>
        <li>
          <a href='/list-wonkooklee'>홈</a>
        </li>
        <li></li>
        <li>
          <a href='/list-wonkooklee'>MENU</a>
        </li>
        <li></li>
        <li>
          <a href='/list-wonkooklee'>음료</a>
        </li>
        <li></li>
        <li>
          <a href='/list-wonkooklee'>{this.props?.category}</a>
        </li>
        <li></li>
        <li>
          <strong>{this.props?.name}</strong>
        </li>
      </ul>
    );
  }
}

export default BreadCrumb;
