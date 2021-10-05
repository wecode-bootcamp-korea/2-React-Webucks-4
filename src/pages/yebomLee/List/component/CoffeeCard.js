import React, { Component } from 'react';
import LikeHeart from '../../components/LikeHeart';
import './CoffeeCard.scss';

class CoffeeCard extends Component {
  constructor() {
    super();
    this.state = {
      fillHeart: false,
    };
  }

  fillLikeHeart = () => {
    this.setState({
      fillHeart: !this.state.fillHeart,
    });
  };

  render() {
    const { id, name, img } = this.props;
    return (
      <li className='CoffeeCard' id={id}>
        <div className='fixImg'>
          <img className='coffeeImg' alt={name} src={img} />
        </div>
        <div className='coffeeName'>
          {name}{' '}
          <LikeHeart
            fillHeart={this.state.fillHeart}
            fillLikeHeart={this.fillLikeHeart}
            size={'1rem'}
          />
        </div>
      </li>
    );
  }
}

export default CoffeeCard;
