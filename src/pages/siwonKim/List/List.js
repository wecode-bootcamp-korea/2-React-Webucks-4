import React, { Component } from 'react';
import TopNav from '../TopNav';
import CateTitle from './CateTitle';
import ProductList from './ProductList';
import '../List/List.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: { coldBrews: [], breweds: [] },
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/ITEMS.json', {
      method: 'GET',
    }) //
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data.myData,
        });
      });
  }

  render() {
    const { coldBrews, breweds } = this.state.products;
    return (
      <div className='List'>
        <TopNav />
        <div className='liner'>
          <CateTitle cate='콜드 브루 커피' />
          <div className='productList'>
            {coldBrews.map(data => {
              return <ProductList data={data} />;
            })}
          </div>
          <CateTitle cate='브루드 커피' />
          <div className='productList'>
            {breweds.map(data => {
              return <ProductList data={data} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default List;
