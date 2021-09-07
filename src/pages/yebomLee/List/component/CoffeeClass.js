import React, { Component } from 'react';
import { SiCoffeescript } from 'react-icons/si';
import './CoffeeClass.scss';

class CoffeeClass extends Component {
  render() {
    return (
      <div className='menuBox'>
        <span className='coffeeType'>콜드 브루 커피</span>
        <i className='icon'>
          <SiCoffeescript />
        </i>
        <span className='extraInfo'>
          디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
        </span>
      </div>
    );
  }
}

export default CoffeeClass;
