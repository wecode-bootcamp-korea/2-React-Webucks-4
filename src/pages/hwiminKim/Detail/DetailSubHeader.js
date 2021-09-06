import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './DetailSubHeader.scss';

class DetailSubHeader extends Component {
  render() {
    return (
      <header className='DetailSubHeader'>
        <h1>{this.props?.category}</h1>
        <ul className='subHeaderItems'>
          <li>
            <a>홈</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faChevronRight}
              size='1x'
              className='chevronRight'
            />
          </li>
          <li>
            <a>MENU</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faChevronRight}
              size='1x'
              className='chevronRight'
            />
          </li>
          <li>
            <a>음료</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faChevronRight}
              size='1x'
              className='chevronRight'
            />
          </li>
          <li>
            <a>에스프레소</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faChevronRight}
              size='1x'
              className='chevronRight'
            />
          </li>
          <li>
            <a>나이트로 바닐라 크림</a>
          </li>
        </ul>
      </header>
    );
  }
}
export default DetailSubHeader;
