import React, { Component } from 'react';
import HeartBtn from './HeartBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './ReviewThread.scss';

class Review extends Component {
  deleteReviewThread = () => {
    const { reviewThread, deleteReview } = this.props;
    deleteReview(reviewThread.id);
  };

  render() {
    const { reviewText, id, isLiked, changeHeartBtnColor } = this.props;
    return (
      <li className='ReviewThread'>
        <div className='contentBox'>
          <p className='individualReviewBox'>
            <b>작성자</b> <span>{reviewText}</span>
          </p>
        </div>
        <div className='btnBox'>
          <button className='btn'>
            <FontAwesomeIcon
              className='trashIcon'
              icon={faTrash}
              size='1x'
              onClick={this.deleteReviewThread}
            />
          </button>
          <HeartBtn
            id={id}
            isLiked={isLiked}
            changeHeartBtnColor={changeHeartBtnColor}
          />
        </div>
      </li>
    );
  }
}

export default Review;
