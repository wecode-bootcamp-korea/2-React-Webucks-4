import React, { Component } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import './DetailCoffeeInfo.scss';

class DetailCoffeeInfo extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }

  toggleActive = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    return (
      <div>
        <div className='menuNameBox'>
          <p className='kor'>바닐라 크림 콜드 브루</p>
          <p className='eng'>Vanilla Cream Cold Brew</p>
          <i>
            {this.state.isActive ? (
              <BsHeartFill
                onClick={this.toggleActive}
                className='likeHeart active'
                size='2em'
              />
            ) : (
              <BsHeart
                className='likeHeart'
                onClick={this.toggleActive}
                size='2em'
              />
            )}
          </i>
        </div>
        <p className='explainCoffee'>
          콜드 브루에 더해진 바닐라 크림으로 깔끔하면서 달콤한 콜드 브루를
          새롭게 즐길 수 있는 음료입니다.
        </p>
      </div>
    );
  }
}

export default DetailCoffeeInfo;
