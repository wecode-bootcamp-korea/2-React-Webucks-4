import React, { Component } from 'react';
import TopsNav from '../component/TopsNav';
import SubHeader from './ListSubHeader';
import CoffeeList from './CoffeeList';
import './List.scss';

class List extends Component {
  state = {
    coldBrews: [],
    breweds: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/ITEMS.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        const { coldBrews, breweds } = data;
        this.setState({ coldBrews, breweds });
      });
  }

  render() {
    const { coldBrews, breweds } = this.state;
    return (
      <section className='List'>
        <TopsNav />
        <SubHeader category={'콜드 브루 커피'} />
        <CoffeeList productData={coldBrews} />
        <SubHeader category={'브루 커피'} />
        <CoffeeList productData={breweds} />
      </section>
    );
  }
}

export default List;
