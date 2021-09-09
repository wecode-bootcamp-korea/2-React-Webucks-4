import React, { Component } from 'react';
import LikeHeart from '../../components/LikeHeart';
import './CoffeeCard.scss';

class CoffeeCard extends Component {
  render() {
    const { id, name, img } = this.props;
    return (
      <li className='CoffeeCard' id={id}>
        <div className='fixImg'>
          <img className='coffeeImg' alt={name} src={img} />
        </div>
        <div className='coffeeName'>
          {name} <LikeHeart />
        </div>
      </li>
    );
  }
}

export default CoffeeCard;
