import React, { Component } from 'react';
import LikeBtn from './LikeBtn';
import './ReviewThread.scss';

class ReviewThread extends Component {
  render() {
    const { liked, commentId, deleteThread, toggleLiked, userId, userComment } =
      this.props;
    return (
      <li className='reviewThread'>
        <LikeBtn
          liked={liked}
          commentId={commentId}
          toggleLiked={toggleLiked}
        />
        <span className='id'>{userId}</span>
        <span className='comment'>{userComment}</span>
        <div id='closeBtn' onClick={() => deleteThread(commentId)}>
          X
        </div>
      </li>
    );
  }
}

export default ReviewThread;
