import React, { Component } from 'react';
import ReviewThread from './ReviewThread';
import './Comment.scss';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      invalidCommentLength: false,
      comments: [],
    };
  }

  componentDidMount() {
    fetch('/data/COMMENT_DATA.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          comments: data,
        })
      )
      .catch(console.log);
  }

  invalidCommentLength = () => {
    const delayUI = 1500;
    this.setState({
      invalidCommentLength: true,
    });
    setTimeout(() => {
      this.setState({
        invalidCommentLength: false,
      });
    }, delayUI);
  };

  inputValidation = event => {
    if (event.key !== 'Enter') return;
    if (event.target.value.length < 10) {
      this.invalidCommentLength();
      return;
    }
    this.addComment(event);
  };

  addComment = event => {
    const { comments } = this.state;
    this.setState({
      comments: [
        {
          commentId: Math.floor(Math.random() * 10000) + 1,
          userId: 'oneook',
          userComment: event.target.value,
        },
        ...comments,
      ],
    });
    event.target.value = '';
  };

  deleteThread = id => {
    const { comments } = this.state;
    this.setState({
      comments: [...comments].filter(cmt => cmt.commentId !== id),
    });
  };

  toggleLiked = id => {
    const comments = this.state.comments.slice();
    const matchIndex = comments.findIndex(cmt => cmt.commentId === id);
    comments[matchIndex].liked = !comments[matchIndex].liked;
    this.setState({ comments: comments });
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
              {this.state.comments.length ? (
                this.state.comments.map(comment => {
                  const { liked, commentId, userId, userComment } = comment;
                  return (
                    <ReviewThread
                      liked={liked}
                      key={commentId}
                      commentId={commentId}
                      userId={userId}
                      userComment={userComment}
                      deleteThread={this.deleteThread}
                      toggleLiked={this.toggleLiked}
                    />
                  );
                })
              ) : (
                <p>코멘트가 없어요</p>
              )}
            </ul>
          </dd>
        </dl>
        <div
          id='validTag'
          className={this.state.invalidCommentLength ? 'notValid' : ''}
        >
          최소 열 자 이상 입력해주세요
        </div>
        <form action='submit' onSubmit={e => e.preventDefault()}>
          <input
            onKeyPress={this.inputValidation}
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
