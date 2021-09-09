import React, { Component } from 'react';
import HeartIcon from './HeartBtn';
import { Link } from 'react-router-dom';
import './CoffeeCard.scss';

class CoffeeCard extends Component {
  render() {
    const { name, imgUrl, isLiked, id } = this.props;
    const changeHeartBtnColor = this.props.changeHeartBtnColor;

    return (
      <div className='CoffeeCard'>
        <li className='card'>
          <div className='flowbox'>
            <Link to='/detail-hwiminKim'>
              <img alt={name} className='cardImage' src={imgUrl} />
            </Link>
          </div>
          <div className='productTitleBox'>
            <Link to='/detail-hwiminKim'>{name}</Link>
            <HeartIcon
              isLiked={isLiked}
              changeHeartBtnColor={changeHeartBtnColor}
              id={id}
            />
          </div>
        </li>
      </div>
    );
  }
}

export default CoffeeCard;
