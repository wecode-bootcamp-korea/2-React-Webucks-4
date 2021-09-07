import React from 'react';
import Comment from './Comment';

class DetailReview extends React.Component {
  constructor() {
    super();
    this.state = {
      ID: Date.now(),
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
    this.setState({
      commentList: this.state.commentList.concat([this.state.commentText]),
      commentText: '',
    });
  };

  /*
  remove = key => {
    const { Comment } = this.state;
    this.setState({
      Comment: Comment.filter(key => E.i !== i),
    });
  };
  */

  render() {
    return (
      <>
        <div className='review'>
          <p className='reviewTitle'>리뷰</p>
          <ul>
            <li>
              {this.state.commentList.map((e, i) => {
                return <Comment key={i} commentText={e} remove={this.remove} />;
              })}
            </li>
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
