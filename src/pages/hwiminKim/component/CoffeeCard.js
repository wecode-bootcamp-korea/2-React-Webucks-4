import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './CoffeeCard.scss';

class CoffeeCard extends Component {
  state = {
    isToggleOn: false,
  };

  changeHeartBtnColor = () => {
    const { isToggleOn } = this.state;
    this.setState({ isToggleOn: !isToggleOn });
  };

  render() {
    const title = this.props.title;
    const imgURL = this.props.imageURL;
    const isToggleOn = this.state.isToggleOn;
    return (
      <div className='CoffeeCard'>
        <li className='card'>
          <div className='flowbox'>
            <Link to='/detail-hwiminKim'>
              <img alt={title} className='cardImage' src={imgURL} />
            </Link>
          </div>
          <div className='productTitleBox'>
            <Link to='/detail-hwiminKim'>{title}</Link>
            <FontAwesomeIcon
              icon={faHeart}
              className={isToggleOn ? 'iconColorRed' : 'heartIcon'}
              onClick={this.changeHeartBtnColor}
            />
          </div>
        </li>
      </div>
    );
  }
}

export default CoffeeCard;
