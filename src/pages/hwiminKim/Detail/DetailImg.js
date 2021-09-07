import React, { Component } from 'react';
import './DetailImg.scss';

class DetailImg extends Component {
  render() {
    const title = this.props.productData?.title;
    const imgUrl = this.props.productData?.imgUrl;
    return (
      <section className='imgContainer'>
        <img alt={title} src={imgUrl} className='coffeeInfoImage' />
      </section>
    );
  }
}

export default DetailImg;
