import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import './LikeBtn.scss';

class LikeBtn extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
    };
  }

  render() {
    return (
      <span id='like_comment_container'>
        <input
          type='checkbox'
          className={this.state.liked ? 'liked' : ''}
          onClick={() =>
            this.setState({
              liked: !this.state.liked,
            })
          }
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
