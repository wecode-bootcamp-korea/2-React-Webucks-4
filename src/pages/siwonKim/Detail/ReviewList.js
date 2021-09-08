import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './ReviewList.scss';

class ReviewList extends Component {
  render() {
    const { data, togleLikeOrDeleteState } = this.props;

    return (
      <li className='ReviewList'>
        <span className='id'>{data.userId}</span>
        <span className='text'>{data.text}</span>
        <FontAwesomeIcon
          icon={faHeart}
          className={data.likeOn ? 'likeOn' : 'likeOff'}
          onClick={() => {
            togleLikeOrDeleteState(data.id, 't');
          }}
        />
        <span
          className='delete'
          onClick={() => {
            togleLikeOrDeleteState(data.id, 'd');
          }}
        >
          x
        </span>
      </li>
    );
  }
}

export default ReviewList;
