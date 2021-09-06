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
          <a href='/list-wonkooklee'>{this.props?.category}</a>
        </li>
        <li></li>
        <li>
          <a href='/detail-wonkooklee'>
            <strong>{this.props?.name}</strong>
          </a>
        </li>
      </ul>
    );
  }
}

export default BreadCrumb;
