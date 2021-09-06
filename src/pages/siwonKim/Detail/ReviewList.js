import React, { Component } from 'react';

import './ReviewList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class ReviewList extends Component {
  render() {
    return (
      <li className='ReviewList'>
        <span className='id'>{this.props.data.userId}</span>
        <span className='text'>{this.props.data.text}</span>
        <FontAwesomeIcon
          icon={faHeart}
          className={this.props.data.likeOn ? 'likeOn' : 'likeOff'}
          size=''
          onClick={this.props.togleLike(this.props.data.id)}
        />
        <span
          className='delete'
          onClick={this.props.deleteList(this.props.data.id)}
        >
          x
        </span>
      </li>
    );
  }
}

export default ReviewList;
