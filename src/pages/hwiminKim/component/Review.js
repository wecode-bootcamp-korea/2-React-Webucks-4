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
    return (
      <li className='item'>
        <div className='contentBox'>
          <p>
            <b>작성자</b> <span>{this.props.review}</span>
          </p>
        </div>
        <div className='btnBox'>
          <button>
            <FontAwesomeIcon
              className='trashIcon'
              icon={faTrash}
              size='1x'
              onClick={this.handleChange}
            />
          </button>
          <button>
            <FontAwesomeIcon
              icon={faHeart}
              size='1x'
              className={this.state.isToggleOn ? 'iconColorRed' : 'heartIcon'}
              onClick={this.changeHeartBtnColor}
            />
          </button>
        </div>
      </li>
    );
  }
}

export default Review;
