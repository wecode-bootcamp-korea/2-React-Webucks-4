import React, { Component } from 'react';
import LikeBtn from './LikeBtn';
import './ReviewThread.scss';

class ReviewThread extends Component {
  render() {
    return (
      <li className='review_thread'>
        <LikeBtn
          liked={this.props.liked}
          commentId={this.props.commentId}
          toggleLiked={this.props.toggleLiked}
        />
        <span className='id'>{this.props.userId}</span>
        <span className='comment'>{this.props.userComment}</span>
        <div
          id='closeBtn'
          onClick={() => this.props.deleteThread(this.props.commentId)}
        >
          X
        </div>
      </li>
    );
  }
}

export default ReviewThread;
