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
    const name = this.props.description?.name;
    const engName = this.props.description?.engName;
    const isToggleOn = this.state.isToggleOn;
    const summary = this.props.description?.desc.split('\n').map((line, i) => {
      return (
        <span key={i} className='coffeeDescription'>
          {line}
          <br />
        </span>
      );
    });

    return (
      <>
        <header className='infoHeader'>
          <div>
            <h2 className='infoTitle'>{name}</h2>
            <p>{engName}</p>
          </div>
          <FontAwesomeIcon
            icon={faHeart}
            size='2x'
            className={isToggleOn ? 'iconColorRed' : 'headerHeart'}
            onClick={this.changeHeartBtnColor}
          />
        </header>
        <p className='coffeeDescriptionBox'>{summary}</p>
      </>
    );
  }
}

export default DetailFeatureHeader;
