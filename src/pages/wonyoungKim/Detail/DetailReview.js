import React from 'react';
import Comment from './Comment';

class DetailReview extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentText: '',
      userID: 'coffeelover',
    };
  }

  //input창 댓글 값 확인
  reviewState = event => {
    this.setState({ commentText: event.target.value });
  };

  //댓글추가
  commentAdd = () => {
    const commentText = this.state.commentText;
    this.state.commentList.push(commentText);
    this.setState({
      commentList: this.state.commentList,
      commentText: '',
    });
  };

  render() {
    return (
      <>
        <div className='review'>
          <p className='reviewTitle'>리뷰</p>
          <ul>
            {this.state.commentList.map((item, i) => {
              return (
                <Comment
                  key={i}
                  userId={this.state.userId}
                  commentText={item}
                />
              );
            })}
          </ul>
        </div>
        <input
          type='text'
          className='reviewEnter'
          placeholder='리뷰를 입력해주세요.'
          onChange={this.reviewState}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.commentAdd();
              event.target.value = '';
            }
          }}
        />
        <button className='reviewAddBtn' onClick={this.commentAdd}>
          Add
        </button>
      </>
    );
  }
}

export default DetailReview;
