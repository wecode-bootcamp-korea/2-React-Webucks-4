import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

class LikeBtn extends Component {
  render() {
    return (
      <div id='like_bev_container'>
        <input type='checkbox' name='like_bev' id='like_bev' />
        <FontAwesomeIcon className='far fa-heart login_icon' icon={farHeart} />
        <FontAwesomeIcon className='fas fa-heart login_icon' icon={fasHeart} />
      </div>
    );
  }
}

export default LikeBtn;