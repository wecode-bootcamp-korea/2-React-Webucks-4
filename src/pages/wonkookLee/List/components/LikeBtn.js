import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import './LikeBtn.scss';

class LikeBtn extends Component {
  likeToggling = event => {
    this.props.controlFavBeverages(event, this.props.linkId);
  };

  render() {
    return (
      <div id='LikeBtn'>
        <input
          type='checkbox'
          name='like_bev'
          id='likeBev'
          className={this.props.liked ? 'liked' : ''}
          onClick={this.likeToggling}
        />
        <FontAwesomeIcon className='far fa-heart loginIcon' icon={farHeart} />
        <FontAwesomeIcon className='fas fa-heart loginIcon' icon={fasHeart} />
      </div>
    );
  }
}

export default LikeBtn;
