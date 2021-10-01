import React, { Component } from 'react';
import Nav from '../components/Nav';
import CoffeeCategory from './component/CoffeeCategory';
import CoffeeList from './component/CoffeeList';
import './List.scss';

class List extends Component {
  constructor() {
    super();
    this.state = {
      coldBrews: [],
      breweds: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/items.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          coldBrews: data.coldBrews,
          breweds: data.breweds,
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className='List'>
        <Nav />
        <main className='mainCoffeeContent'>
          <CoffeeCategory />
          <CoffeeList beverages={this.state.coldBrews} />
          <CoffeeCategory />
          <CoffeeList beverages={this.state.breweds} />
        </main>
      </div>
    );
  }
}

export default List;
