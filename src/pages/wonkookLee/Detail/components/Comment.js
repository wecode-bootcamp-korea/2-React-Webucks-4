import React, { Component } from 'react';
// import { Comments } from './commentData';
import ReviewThread from './ReviewThread';
import './Comment.scss';

const comments = [
  {
    commentId: 1,
    userId: 'coffee_lover',
    userComment: '너무 맛있어요!',
  },
  {
    commentId: 2,
    userId: 'CHOCO7',
    userComment: '오늘도 제주 비자림 콜드 브루를 마시러 제주도에 갑니다.',
  },
  {
    commentId: 3,
    userId: 'legend_dev',
    userComment:
      '진짜 제주 비자림 콜드 브루는 전설이다. 진짜 제주 비자림 콜드 브루는 전설이다. 진짜 제주 비자림 콜드 브루는 전설이다.',
  },
];

class Comment extends Component {
  constructor() {
    super();
    this.state = {};
    this.addComment = this.addComment.bind(this);
  }

  addComment(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      comments.unshift({
        commentId: Math.floor(Math.random() * 100) + 1,
        userId: 'oneook',
        userComment: e.target.value,
      });
    }
  }

  render() {
    return (
      <section className='review_wrap'>
        <dl>
          <dt className='review_tit'>
            <h4>리뷰</h4>
          </dt>
          <dd className='review_container'>
            <ul id='RvTarget'>
              {comments.map(comment => {
                return (
                  <ReviewThread
                    key={comment.commentId}
                    userId={comment.userId}
                    userComment={comment.userComment}
                  />
                );
              })}
            </ul>
          </dd>
        </dl>
        <div id='validTag'>최소 열 자 이상 입력해주세요</div>
        <form action='submit'>
          <input
            id='review_field'
            type='text'
            placeholder='리뷰를 입력해주세요'
            spellCheck='false'
            onKeyDown={this.addComment}
          />
          <label title='리뷰입력기'></label>
        </form>
      </section>
    );
  }
}

export default Comment;
