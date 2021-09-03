import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import './LikeBtn.scss';

class LikeBtn extends Component {
  render() {
    const { liked, commentId, toggleLiked } = this.props;
    return (
      <span id='like_comment_container'>
        <input
          type='checkbox'
          className={liked ? 'liked' : ''}
          onClick={() => toggleLiked(commentId)}
          name='like_comment'
          id='like_comment'
        />
        <FontAwesomeIcon className='far fa-heart' icon={farHeart} />
        <FontAwesomeIcon className='fas fa-heart' icon={fasHeart} />
      </span>
    );
  }
}

export default LikeBtn;
