import React, { Component } from 'react';

class ReviewThread extends Component {
  render() {
    return (
      <li className='review_thread'>
        <span className='id'>{this.props.userId}</span>
        <span className='comment'>{this.props.userComment}</span>
        <div id='closeBtn'>X</div>
      </li>
    );
  }
}

export default ReviewThread;
