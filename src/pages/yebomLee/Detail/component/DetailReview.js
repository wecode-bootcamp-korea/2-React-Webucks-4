import React, { Component } from 'react';
import LikeHeart from '../../components/LikeHeart';
import { BsTrash } from 'react-icons/bs';
import './DetailReview.scss';

class DetailReview extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      commentsArr: [],
    };
  }

  getComment = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  addComment = e => {
    if (e.key !== 'Enter') {
      return;
    }
    e.preventDefault();
    const commentobj = {
      userName: 'user',
      comment: this.state.comment,
    };
    this.setState({
      commentsArr: [...this.state.commentsArr, commentobj],
      comment: '',
    });
  };

  render() {
    return (
      <div className='DetailReview'>
        <p className='review'>리뷰</p>
        <ul className='userReview'>
          {this.state.commentsArr.map(comment => {
            return (
              <li>
                <span>{comment.userName}</span>
                <span>{comment.comment}</span>
                <b>
                  <LikeHeart />
                  <BsTrash />
                </b>
              </li>
            );
          })}
        </ul>
        <form>
          <input
            onKeyPress={this.addComment}
            onChange={this.getComment}
            type='text'
            placeholder='리뷰를 입력해주세요.'
            value={this.state.comment}
          />
        </form>
      </div>
    );
  }
}

export default DetailReview;
