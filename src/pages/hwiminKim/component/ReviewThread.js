import React, { Component } from 'react';
import HeartIcon from './HeartIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './ReviewThread.scss';

class Review extends Component {
  handleChange = () => {
    const { data, onRemove } = this.props;
    onRemove(data.id);
  };

  render() {
    const reviewText = this.props.review;
    return (
      <li className='reviewItem'>
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
              onClick={this.handleChange}
            />
          </button>
          <HeartIcon />
        </div>
      </li>
    );
  }
}

export default Review;
