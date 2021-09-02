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
    console.log(title, imgURL);
    return (
      <div className='CoffeeCard'>
        <li className='card'>
          <div className='flowbox'>
            <Link onClick={this.handleChange} to='/detail-hwiminKim'>
              <img className='cardImage' alt={title} src={imgURL} />
            </Link>
          </div>
          <div className='productTitleBox'>
            <Link to='/detail-hwiminKim'>{title}</Link>
            <FontAwesomeIcon
              icon={faHeart}
              // size='1x'
              className={this.state.isToggleOn ? 'iconColorRed' : 'heartIcon'}
              onClick={this.changeHeartBtnColor}
            />
          </div>
        </li>
      </div>
    );
  }
}

export default CoffeeCard;
