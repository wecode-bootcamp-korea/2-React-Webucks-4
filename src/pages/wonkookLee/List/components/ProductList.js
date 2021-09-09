import React, { Component } from 'react';
import CategoryHeader from './CategoryHeader';
import CoffeeCard from './CoffeeCard';
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      coldBrews: [],
      breweds: [],
      favBeverages: [101, 103, 107],
      isError: false,
    };
  }

  componentDidMount() {
    fetch('/data/PRODUCT_LIST.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          coldBrews: data.coldBrews,
          breweds: data.breweds,
        })
      )
      .catch(() => {
        this.setState({
          isError: true,
        });
      });
  }

  controlFavBeverages = (event, id) => {
    event.preventDefault();
    const favArr = this.state.favBeverages.slice();
    this.setState({
      favBeverages: favArr.includes(id)
        ? favArr.filter(bevId => bevId !== id)
        : [...favArr, id],
    });
  };

  render() {
    return (
      <div className='content'>
        <div className='productResultWrap'>
          <dl className='productViewTab'>
            <div className='productList'>
              <CategoryHeader category='콜드 브루' />
              <ul>
                {!this.state.isError &&
                  this.state.coldBrews.map(beverage => {
                    return (
                      <CoffeeCard
                        key={beverage.id}
                        linkId={beverage.id}
                        name={beverage.name}
                        imgUrl={beverage.imgUrl}
                        isNewProduct={beverage.isNewProduct}
                        controlFavBeverages={this.controlFavBeverages}
                        liked={this.state.favBeverages.includes(beverage.id)}
                      />
                    );
                  })}
              </ul>
            </div>
            <div className='productList'>
              <CategoryHeader category='브루드 커피' />
              <ul>
                {!this.state.isError &&
                  this.state.breweds.map(beverage => {
                    return (
                      <CoffeeCard
                        key={beverage.id}
                        linkId={beverage.id}
                        name={beverage.name}
                        imgUrl={beverage.imgUrl}
                        isNewProduct={beverage.isNewProduct}
                        controlFavBeverages={this.controlFavBeverages}
                        liked={this.state.favBeverages.includes(beverage.id)}
                      />
                    );
                  })}
              </ul>
            </div>
          </dl>
        </div>
      </div>
    );
  }
}

export default ProductList;
