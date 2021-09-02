import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './CoffeeCard.scss';

class CoffeeCard extends Component {
  render() {
    const title = this.props.title;
    const imgURL = this.props.imageURL;
    console.log(title, imgURL);
    return (
      <div className='CoffeeCard'>
        <li className='card'>
          <div className='flowbox'>
            <Link onClick={this.handleChange} to='/detail-hwiminKim'>
              <img className='cardImage' alt={title} src={imgURL} />
            </Link>
          </div>
          <div className='productTitleBox'>
            <Link to='/detail-hwiminKim'>{title}</Link>
            <FontAwesomeIcon className='heartIcon' icon={faHeart} size='2x' />
          </div>
        </li>
      </div>
    );
  }
}

export default CoffeeCard;
