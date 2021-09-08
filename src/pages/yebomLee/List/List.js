import React, { Component } from 'react';
import Nav from '../components/Nav';
import CoffeeCategory from './component/CoffeeCategory';
import CoffeeList from './component/CoffeeList';
import BEVERAGES from './component/ITEMS';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div className='List'>
        <Nav />
        <main className='mainCoffeeContent'>
          <CoffeeCategory />
          <CoffeeList beverages={BEVERAGES.coldBrews} />
          <CoffeeCategory />
          <div className='otherCoffee'>
            <CoffeeList beverages={BEVERAGES.breweds} />
          </div>
        </main>
      </div>
    );
  }
}

export default List;
