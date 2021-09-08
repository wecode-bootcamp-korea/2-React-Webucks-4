import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <div className='comment' key={this.props.i}>
        <span className='reviewId'>{this.props.userID}</span>
        <span className='reviewText'>{this.props.commentText}</span>
        <button className='remove' onClick={this.props.remove}>
          remove
        </button>
      </div>
    );
  }
}

export default Comment;
