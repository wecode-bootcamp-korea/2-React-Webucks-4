import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './HeartBtn.scss';

class HeartIcon extends Component {
  onClick = event => {
    event.preventDefault();
    const { changeHeartBtnColor, id } = this.props;
    changeHeartBtnColor(id);
  };

  render() {
    const isLiked = this.props.isLiked;
    return (
      <button className='HeartBtn'>
        <FontAwesomeIcon
          icon={faHeart}
          size='1x'
          className={isLiked ? 'iconColorRed' : 'heartIcon'}
          onClick={this.onClick}
        />
      </button>
    );
  }
}

export default HeartIcon;
