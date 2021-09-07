import React, { Component } from 'react';
import HeartIcon from './HeartIcon';
import { Link } from 'react-router-dom';
import './CoffeeCard.scss';

class CoffeeCard extends Component {
  render() {
    const title = this.props.title;
    const imgURL = this.props.imageURL;
    return (
      <div className='CoffeeCard'>
        <li className='card'>
          <div className='flowbox'>
            <Link to='/detail-hwiminKim'>
              <img alt={title} className='cardImage' src={imgURL} />
            </Link>
          </div>
          <div className='productTitleBox'>
            <Link to='/detail-hwiminKim'>{title}</Link>
            <HeartIcon />
          </div>
        </li>
      </div>
    );
  }
}

export default CoffeeCard;
