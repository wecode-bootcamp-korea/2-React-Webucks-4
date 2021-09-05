import React, { Component } from 'react';
import CoffeeCard from '../component/CoffeeCard';
import './CoffeeList.scss';

class CoffeeList extends Component {
  render() {
    return (
      <section className='coffeeList'>
        <ul className='coffeeListItems'>
          {this.props.productData.map(individualProduct => {
            return (
              <CoffeeCard
                key={individualProduct.id}
                title={individualProduct.name}
                imageURL={individualProduct.imgUrl}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default CoffeeList;
