import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './DetailSubHeader.scss';

class DetailSubHeader extends Component {
  render() {
    const category = this.props?.category;
    return (
      <header className='DetailSubHeader'>
        <h1>{category}</h1>
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
            <Link>나이트로 바닐라 크림</Link>
          </li>
        </ul>
      </header>
    );
  }
}
export default DetailSubHeader;
