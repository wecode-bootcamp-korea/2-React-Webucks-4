import React, { Component } from 'react';
import LikeBtn from './LikeBtn';

class CoffeeCard extends Component {
  render() {
    return (
      <li className='menuDataSet'>
        <dl>
          <dt>
            <LikeBtn />
            <a href='http://localhost:3000'>
              <img src={this.props.imgUrl} alt={this.props.name} />
            </a>
          </dt>
          <dd>{this.props.name}</dd>
        </dl>
      </li>
    );
  }
}

export default CoffeeCard;
