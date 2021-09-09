import React, { Component } from 'react';
import ListSubHeader from './ListSubHeader';
import CoffeeCard from '../component/CoffeeCard';
import './CoffeeList.scss';

class CoffeeList extends Component {
  render() {
    const productData = this.props.productData;
    const category = this.props?.productData[0]?.category;
    const changeHeartBtnColor = this.props.changeHeartBtnColor;
    return (
      <section className='CoffeeList'>
        <ListSubHeader category={category} />
        <ul className='coffeeListItems'>
          {this.props.isError ||
            productData.map(product => {
              const { id, name, imgUrl, isLiked } = product;
              return (
                <CoffeeCard
                  key={id}
                  name={name}
                  imgUrl={imgUrl}
                  isLiked={isLiked}
                  changeHeartBtnColor={changeHeartBtnColor}
                  id={id}
                />
              );
            })}
        </ul>
      </section>
    );
  }
}

export default CoffeeList;
