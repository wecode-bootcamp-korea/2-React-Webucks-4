import React, { Component } from 'react';
import { Beverages } from './items';
import ProductsHeader from './ProductsHeader';
import CoffeeCard from './CoffeeCard';

class ProductList extends Component {
  render() {
    return (
      <div className='product_list'>
        <dl>
          <ProductsHeader category={Beverages.coldBrews[0].category} />
          <dd>
            <ul className='product_cold_brew clearfix'>
              {Beverages.coldBrews.map(beverage => {
                return (
                  <CoffeeCard
                    key={beverage.id}
                    name={beverage.name}
                    imgUrl={beverage.imgUrl}
                  />
                );
              })}
            </ul>
          </dd>
          <ProductsHeader category={Beverages.breweds[0].category} />
          <dd>
            <ul className='product_brood clearfix'>
              {Beverages.breweds.map(beverage => {
                return (
                  <CoffeeCard
                    key={beverage.id}
                    name={beverage.name}
                    imgUrl={beverage.imgUrl}
                  />
                );
              })}
            </ul>
          </dd>
        </dl>
      </div>
    );
  }
}

export default ProductList;
