import React, { Component } from 'react';
import LikeBtn from './LikeBtn';

class CoffeeCard extends Component {
  render() {
    return (
      <li className='menuDataSet'>
        <dl>
          <dt>
            <LikeBtn />
            <a href='./detail-wonkooklee'>
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
