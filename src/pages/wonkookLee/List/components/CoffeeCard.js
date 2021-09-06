import React, { Component } from 'react';
import './CoffeeCard.scss';
import LikeBtn from './LikeBtn';

class CoffeeCard extends Component {
  render() {
    return (
      <li className='menuDataSet'>
        <dl>
          <dt
            onClick={e => this.props.goToEachDetailPage(e, this.props.linkId)}
          >
            {this.props.isNewProduct ? (
              <div className='new_badge'>
                <img
                  src='https://image.istarbucks.co.kr/common/img/menu/mark01.png'
                  alt='NEW'
                />
              </div>
            ) : null}
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
