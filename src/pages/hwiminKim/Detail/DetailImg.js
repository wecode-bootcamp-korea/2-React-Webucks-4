import React, { Component } from 'react';
import './DetailImg.scss';

class DetailImg extends Component {
  render() {
    const { name, imgUrl } = this.props;
    return (
      <section className='DetailImg'>
        <img alt={name} src={imgUrl} className='coffeeInfoImage' />
      </section>
    );
  }
}

export default DetailImg;
