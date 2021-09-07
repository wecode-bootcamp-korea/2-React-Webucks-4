import React from 'react';
import './CoffeeCard.scss';
import HeartLike from '../../Detail/components/HeartLike';

class CoffeeCard extends React.Component {
  render() {
    return (
      <section className='menuList'>
        <div id='menu'>
          <div className='fit'>
            <a href='/Detail-wonyoungKim'>
              <img alt='coffee' key={this.props.id} src={this.props.img} />
            </a>
          </div>
          <div className='Name'>
            {this.props.Name}
            <HeartLike />
          </div>
        </div>
      </section>
    );
  }
}

export default CoffeeCard;
