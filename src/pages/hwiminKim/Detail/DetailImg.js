import React, { Component } from 'react';
import './DetailImg.scss';

class DetailImg extends Component {
  render() {
    return (
      <section className='imgContainer'>
        <img
          alt={this.props.description?.title}
          src={this.props.description?.imgUrl}
          className='coffeeInfoImage'
        />
      </section>
    );
  }
}

export default DetailImg;
