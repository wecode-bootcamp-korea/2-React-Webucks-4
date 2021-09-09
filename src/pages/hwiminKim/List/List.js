import React, { Component } from 'react';
import TopsNav from '../component/TopsNav';
import CoffeeList from './CoffeeList';
import './List.scss';

class List extends Component {
  state = {
    coldBrewsData: [],
    brewedsData: [],
    isError: false,
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/ITEMS.json', {})
      .then(res => res.json())
      .then(data => {
        const { coldBrewsData, brewedsData } = data;
        this.setState({ coldBrewsData, brewedsData });
      })
      .catch(() =>
        this.setState({
          isError: true,
        })
      );
  }

  changeHeartBtnColor = id => {
    const { coldBrewsData, brewedsData } = this.state;
    const compareId = (data, id) => {
      return data.map(item => {
        return item.id === id
          ? {
              ...item,
              isLiked: !item.isLiked,
            }
          : item;
      });
    };

    this.setState({
      coldBrewsData: compareId(coldBrewsData, id),
      brewedsData: compareId(brewedsData, id),
    });
  };

  render() {
    const { coldBrewsData, brewedsData, isError } = this.state;
    return (
      <>
        <TopsNav />
        <section className='List'>
          <CoffeeList
            isError={isError}
            productData={coldBrewsData}
            changeHeartBtnColor={this.changeHeartBtnColor}
          />
          <CoffeeList
            isError={isError}
            productData={brewedsData}
            changeHeartBtnColor={this.changeHeartBtnColor}
          />
        </section>
      </>
    );
  }
}

export default List;
