import React, { Component } from 'react';
import './List.scss';
import Nav from '../components/Nav';
// import { SiCoffeescript } from 'react-icons/si';
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
          <CoffeeList beverages={BEVERAGES.breweds} />
        </main>
      </div>
    );
  }
}

export default List;
