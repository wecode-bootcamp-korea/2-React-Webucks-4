import React, { Component } from 'react';
import CoffeeCard from '../component/CoffeeCard';
import './CoffeeList.scss';

class CoffeeList extends Component {
  render() {
    const productData = this.props.productData;
    return (
      <section className='coffeeList'>
        <ul className='coffeeListItems'>
          {productData.map(individualProduct => {
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
