import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <div className='comment' key={this.props.key}>
        <span className='reviewId'>{this.props.userID}</span>
        <span className='reviewText'>{this.props.commentText}</span>
      </div>
    );
  }
}

export default Comment;
