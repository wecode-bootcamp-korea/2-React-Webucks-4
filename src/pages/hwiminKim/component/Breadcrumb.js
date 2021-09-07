import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Breadcrumb extends Component {
  render() {
    const name = this.props.productData?.name;
    return (
      <ul className='subHeaderItems'>
        <li>
          <Link>홈</Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            size='1x'
            className='chevronRight'
          />
        </li>
        <li>
          <Link>MENU</Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            size='1x'
            className='chevronRight'
          />
        </li>
        <li>
          <Link>음료</Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            size='1x'
            className='chevronRight'
          />
        </li>
        <li>
          <Link>에스프레소</Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faChevronRight}
            size='1x'
            className='chevronRight'
          />
        </li>
        <li>
          <Link>{name}</Link>
        </li>
      </ul>
    );
  }
}

export default Breadcrumb;
