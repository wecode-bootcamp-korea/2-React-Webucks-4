import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './Review.scss';

class Review extends Component {
  render() {
    console.log(this.props.review);
    return (
      <li className='item'>
        <div className='contentBox'>
          <p>
            <b>작성자</b> <span>{this.props.review}</span>
          </p>
        </div>
        <div className='btnBox'>
          <button>
            <FontAwesomeIcon className='trashIcon' icon={faTrash} size='1x' />
          </button>
          <button>
            <FontAwesomeIcon className='heartIcon' icon={faHeart} size='1x' />
          </button>
        </div>
      </li>
    );
  }
}

export default Review;
