import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BreadCrumb.scss';

class BreadCrumb extends Component {
  render() {
    return (
      <ul className='smap'>
        <li>
          <Link to='/list-wonkooklee'>홈</Link>
        </li>
        <li></li>
        <li>
          <Link to='/list-wonkooklee'>MENU</Link>
        </li>
        <li></li>
        <li>
          <Link to='/list-wonkooklee'>음료</Link>
        </li>
        <li></li>
        <li>
          <Link to='/list-wonkooklee'>{this.props?.category}</Link>
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
