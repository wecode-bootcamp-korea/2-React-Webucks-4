import React, { Component } from 'react';
import { BEVERAGES } from './ITEMS';
import ProductsHeader from './ProductsHeader';
import CoffeeCard from './CoffeeCard';

class ProductList extends Component {
  render() {
    return (
      <div className='product_list'>
        <dl>
          <ProductsHeader category={BEVERAGES.coldBrews[0].category} />
          <dd>
            <ul className='product_cold_brew clearfix'>
              {BEVERAGES.coldBrews.map(beverage => {
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
          <ProductsHeader category={BEVERAGES.breweds[0].category} />
          <dd>
            <ul className='product_brood clearfix'>
              {BEVERAGES.breweds.map(beverage => {
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
