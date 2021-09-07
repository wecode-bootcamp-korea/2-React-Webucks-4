import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CoffeeCard.scss';
import LikeBtn from './LikeBtn';

class CoffeeCard extends Component {
  render() {
    const { liked, linkId, isNewProduct, controlFavBeverages, name, imgUrl } =
      this.props;
    return (
      <li className='menuDataSet'>
        <dl>
          <Link
            to={{
              pathname: `/detail-wonkooklee/${linkId}`,
              itemId: linkId,
            }}
          >
            <dt>
              {isNewProduct ? (
                <div className='new_badge'>
                  <img
                    src='https://image.istarbucks.co.kr/common/img/menu/mark01.png'
                    alt='NEW'
                  />
                </div>
              ) : null}
              <LikeBtn
                liked={liked}
                linkId={linkId}
                controlFavBeverages={controlFavBeverages}
              />
              <img src={imgUrl} alt={name} />
            </dt>
          </Link>
          <dd>{name}</dd>
        </dl>
      </li>
    );
  }
}

export default CoffeeCard;
