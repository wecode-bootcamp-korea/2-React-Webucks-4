import React, { Component } from 'react';
import './Menubar.scss';

class Menubar extends Component {
  render() {
    return (
      <section className='menubar'>
        <div className='subMenu'>
          <h1 className='subTitle'>{this.props.name}</h1>
          <img
            className='coffeeIcon'
            alt='logo'
            src='/images/coffee_icon.PNG'
          />
          {this.props.text}
        </div>
      </section>
    );
  }
}

export default Menubar;
