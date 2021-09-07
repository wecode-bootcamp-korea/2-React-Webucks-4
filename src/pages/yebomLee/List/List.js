import React, { Component } from 'react';
import './List.scss';
import Nav from '../components/Nav';
import CoffeeClass from './component/CoffeeClass';
import CoffeeList from './component/CoffeeList';
import BEVERAGES from './component/ITEMS';

class List extends Component {
  render() {
    return (
      <div className='List'>
        <Nav />
        <main>
          <CoffeeClass />
          <CoffeeList beverages={BEVERAGES.coldBrews} />
          <CoffeeClass />
          <div className='otherCoffee'>
            <CoffeeList beverages={BEVERAGES.breweds} />
          </div>
        </main>
      </div>
    );
  }
}

export default List;
