import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import './LikeBtn.scss';

class LikeBtn extends Component {
  render() {
    const { liked, commentId, toggleLiked } = this.props;
    return (
      <span id='likeCommentContainer'>
        <input
          type='checkbox'
          className={liked ? 'liked' : ''}
          onClick={() => toggleLiked(commentId)}
          name='likeComment'
          id='likeComment'
        />
        <FontAwesomeIcon className='far fa-heart' icon={farHeart} />
        <FontAwesomeIcon className='fas fa-heart' icon={fasHeart} />
      </span>
    );
  }
}

export default LikeBtn;
