import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './HeartIcon.scss';

class HeartIcon extends Component {
  state = {
    isHeartToggleOn: false,
  };

  changeHeartBtnColor = () => {
    const { isHeartToggleOn } = this.state;
    this.setState({ isHeartToggleOn: !isHeartToggleOn });
  };

  render() {
    const isHeartToggleOn = this.state.isHeartToggleOn;
    return (
      <button className='btn'>
        <FontAwesomeIcon
          icon={faHeart}
          size='1x'
          className={isHeartToggleOn ? 'iconColorRed' : 'heartIcon'}
          onClick={this.changeHeartBtnColor}
        />
      </button>
    );
  }
}

export default HeartIcon;
