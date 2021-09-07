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
      .catch(console.log);
  }

  controlFavBeverages = (id, action) => {
    if (action) {
      this.setState({
        favBeverages: [...this.state.favBeverages, id],
      });
    } else {
      const filtered = this.state.favBeverages.filter(
        beverage => beverage !== id
      );
      this.setState({
        favBeverages: filtered,
      });
    }
  };

  render() {
    return (
      <div className='product_list'>
        <dl>
          <CategoryHeader category={this.state.coldBrews[0]?.category} />
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
                    controlFavBeverages={this.controlFavBeverages}
                    liked={this.state.favBeverages.includes(beverage.id)}
                  />
                );
              })}
            </ul>
          </dd>
          <CategoryHeader category={this.state.breweds[0]?.category} />
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
                    controlFavBeverages={this.controlFavBeverages}
                    liked={this.state.favBeverages.includes(beverage.id)}
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
