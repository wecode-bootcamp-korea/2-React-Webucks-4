import React, { Component } from 'react';
import CategoryHeader from './CategoryHeader';
import CoffeeCard from './CoffeeCard';
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      favBeverages: [101, 103, 107],
    };
  }

  componentDidMount() {
    fetch('/data/PRODUCT_LIST.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data,
        });
      })
      .catch(console.log);
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

  displayProductList = data => {
    return Object.values(data).map((eachData, i) => {
      return (
        <div key={i} className='productList'>
          <CategoryHeader category={eachData[0].category} />
          <ul>
            {eachData.map(beverage => {
              const { id, name, imgUrl, isNewProduct } = beverage;
              return (
                <CoffeeCard
                  key={id}
                  linkId={id}
                  name={name}
                  imgUrl={imgUrl}
                  isNewProduct={isNewProduct}
                  controlFavBeverages={this.controlFavBeverages}
                  liked={this.state.favBeverages.includes(id)}
                />
              );
            })}
          </ul>
        </div>
      );
    });
  };

  render() {
    return (
      <div className='content'>
        <div className='productResultWrap'>
          <dl className='productViewTab'>
            {this.state.data && this.displayProductList(this.state.data)}
          </dl>
        </div>
      </div>
    );
  }
}

export default ProductList;
