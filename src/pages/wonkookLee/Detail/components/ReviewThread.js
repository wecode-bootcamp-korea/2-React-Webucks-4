import React, { Component } from 'react';
import './ReviewThread.scss';

class ReviewThread extends Component {
  render() {
    return (
      <li className='review_thread'>
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
