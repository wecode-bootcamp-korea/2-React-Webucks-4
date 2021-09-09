import React, { Component } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import './LikeHeart.scss';

class LikeHeart extends Component {
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
    return (
      <i>
        {this.state.fillHeart ? (
          <BsHeartFill
            className='likeHeartFill'
            onClick={this.fillLikeHeart}
            size='1rem'
          />
        ) : (
          <BsHeart
            className='likeHeart'
            onClick={this.fillLikeHeart}
            size='1rem'
          />
        )}
      </i>
    );
  }
}
export default LikeHeart;
