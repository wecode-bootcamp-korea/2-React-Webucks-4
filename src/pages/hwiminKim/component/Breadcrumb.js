import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Breadcrumb.scss';

class Breadcrumb extends Component {
  render() {
    const { name } = this.props.productData;
    return (
      <ul className='Breadcrumb'>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            size='1x'
            className='chevronRight'
          />
        </li>
        <li>
          <Link to='/'>MENU</Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            size='1x'
            className='chevronRight'
          />
        </li>
        <li>
          <Link to='/'>음료</Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            size='1x'
            className='chevronRight'
          />
        </li>
        <li>
          <Link to='/'>에스프레소</Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            size='1x'
            className='chevronRight'
          />
        </li>
        <li>
          <Link to='/'>{name}</Link>
        </li>
      </ul>
    );
  }
}

export default Breadcrumb;
