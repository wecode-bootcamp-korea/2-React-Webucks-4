import React, { Component } from 'react';
import './CoffeeCard.scss';

class CoffeeCard extends Component {
  render() {
    return (
      <li className='CoffeeCard' id={this.props.id}>
        <div className='fixImg'>
          <img
            className='coffeeImg'
            alt={this.props.name}
            src={this.props.img}
          />
        </div>
        <p className='coffeeName'>{this.props.name}</p>
      </li>
    );
  }
}

export default CoffeeCard;
