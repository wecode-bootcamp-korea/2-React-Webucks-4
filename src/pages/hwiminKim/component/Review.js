import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './Review.scss';

class Review extends Component {
  state = {
    isToggleOn: false,
  };

  changeHeartBtnColor = () => {
    const { isToggleOn } = this.state;
    this.setState({ isToggleOn: !isToggleOn });
  };

  handleChange = () => {
    const { data, onRemove } = this.props;
    onRemove(data.id);
  };

  render() {
    const reviewText = this.props.review;
    const isToggleOn = this.state.isToggleOn;
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
          <button className='btn'>
            <FontAwesomeIcon
              icon={faHeart}
              size='1x'
              className={isToggleOn ? 'iconColorRed' : 'heartIcon'}
              onClick={this.changeHeartBtnColor}
            />
          </button>
        </div>
      </li>
    );
  }
}

export default Review;
