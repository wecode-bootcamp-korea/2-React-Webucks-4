import React, { Component } from 'react';
import ReviewThread from './ReviewThread';
import './Comment.scss';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      comments: [
        {
          commentId: 1,
          userId: 'coffee_lover',
          userComment: '너무 맛있어요!',
          liked: false,
        },
        {
          commentId: 2,
          userId: 'CHOCO7',
          userComment: '오늘도 제주 비자림 콜드 브루를 마시러 제주도에 갑니다.',
          liked: false,
        },
        {
          commentId: 3,
          userId: 'legend_dev',
          userComment:
            '진짜 제주 비자림 콜드 브루는 전설이다. 진짜 제주 비자림 콜드 브루는 전설이다. 진짜 제주 비자림 콜드 브루는 전설이다.',
          liked: false,
        },
      ],
    };
  }

  addComment = event => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    const { comments } = this.state;
    this.setState({
      comments: [
        {
          commentId: Math.floor(Math.random() * 1000) + 1,
          userId: 'oneook',
          userComment: event.target.value,
        },
        ...comments,
      ],
    });
    event.target.value = '';
  };

  removeComment = id => {
    const { comments } = this.state;
    this.setState({
      comments: [...comments].filter(cmt => cmt.commentId !== id),
    });
  };

  toggleLikeComment = id => {
    const { comments } = this.state;
    const matchIndex = comments.findIndex(cmt => cmt.commentId === id);
    const toggleLiked = comments[matchIndex].liked;
    comments[matchIndex].liked = !toggleLiked;
    this.setState({
      comments: comments,
    });
  };

  render() {
    return (
      <section className='review_wrap'>
        <dl>
          <dt className='review_tit'>
            <h4>리뷰</h4>
          </dt>
          <dd className='review_container'>
            <ul id='RvTarget'>
              {this.state.comments.map(comment => {
                const { liked, commentId, userId, userComment } = comment;
                return (
                  <ReviewThread
                    liked={liked}
                    key={commentId}
                    commentId={commentId}
                    userId={userId}
                    userComment={userComment}
                    deleteThread={this.removeComment}
                    toggleLiked={this.toggleLikeComment}
                  />
                );
              })}
            </ul>
          </dd>
        </dl>
        <div id='validTag'>최소 열 자 이상 입력해주세요</div>
        <form action='submit'>
          <input
            onKeyPress={this.addComment}
            id='review_field'
            type='text'
            placeholder='리뷰를 입력해주세요'
            spellCheck='false'
          />
          <label title='리뷰입력기'></label>
        </form>
      </section>
    );
  }
}

export default Comment;
