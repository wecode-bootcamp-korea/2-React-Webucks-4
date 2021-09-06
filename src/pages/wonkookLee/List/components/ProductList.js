import React, { Component } from 'react';
import ProductsHeader from './ProductsHeader';
import CoffeeCard from './CoffeeCard';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      coldBrews: [],
      breweds: [],
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
      );
  }

  render() {
    return (
      <div className='product_list'>
        <dl>
          <ProductsHeader category={this.state.coldBrews[0]?.category} />
          <dd>
            <ul className='product_cold_brew clearfix'>
              {this.state.coldBrews?.map(beverage => {
                return (
                  <CoffeeCard
                    goToEachDetailPage={this.props.goToEachDetailPage}
                    key={beverage.id}
                    linkId={beverage.id}
                    name={beverage.name}
                    imgUrl={beverage.imgUrl}
                    isNewProduct={beverage.isNewProduct}
                  />
                );
              })}
            </ul>
          </dd>
          <ProductsHeader category={this.state.breweds[0]?.category} />
          <dd>
            <ul className='product_brood clearfix'>
              {this.state.breweds?.map(beverage => {
                return (
                  <CoffeeCard
                    goToEachDetailPage={this.props.goToEachDetailPage}
                    key={beverage.id}
                    linkId={beverage.id}
                    name={beverage.name}
                    imgUrl={beverage.imgUrl}
                    isNewProduct={beverage.isNewProduct}
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
