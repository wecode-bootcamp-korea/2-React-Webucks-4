import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './DetailFeatureHeader.scss';

class DetailFeatureHeader extends Component {
  state = {
    isToggleOn: false,
  };

  changeHeartBtnColor = () => {
    const { isToggleOn } = this.state;
    this.setState({ isToggleOn: !isToggleOn });
  };
  render() {
    const isToggleOn = this.state.isToggleOn;
    return (
      <>
        <header className='infoHeader'>
          <div>
            <h2 className='infoTitle'>{this.props.description.name}</h2>
            <p>{this.props.description.engName}</p>
          </div>
          <FontAwesomeIcon
            icon={faHeart}
            size='2x'
            className={isToggleOn ? 'iconColorRed' : 'headerHeart'}
            onClick={this.changeHeartBtnColor}
          />
        </header>

        <p className='coffeeDescripton'>{this.props.description.summary}</p>
      </>
    );
  }
}

export default DetailFeatureHeader;
