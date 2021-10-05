import React, { Component } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import './LikeHeart.scss';

class LikeHeart extends Component {
  render() {
    return (
      <i>
        {this.props.fillHeart ? (
          <BsHeartFill
            className='likeHeartFill'
            onClick={this.props.fillLikeHeart}
            size={this.props.size}
          />
        ) : (
          <BsHeart
            className='likeHeart'
            onClick={this.props.fillLikeHeart}
            size={this.props.size}
          />
        )}
      </i>
    );
  }
}
export default LikeHeart;
