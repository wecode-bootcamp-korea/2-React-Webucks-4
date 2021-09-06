import React, { Component } from 'react';
import CoffeeCard from './CoffeeCard';

class CoffeeList extends Component {
  render() {
    return (
      <ul className='coffeeList'>
        {this.props.beverages.map((beverages, index) => {
          return (
            <CoffeeCard
              key={beverages.id}
              img={beverages.imgUrl}
              name={beverages.name}
            />
          );
        })}
      </ul>
    );
  }
}

export default CoffeeList;
