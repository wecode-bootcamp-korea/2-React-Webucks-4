import React, { Component } from 'react';
import './Menubar.scss';

class Menubar extends Component {
  render() {
    return (
      <section className='menubar'>
        <div className='subMenu'>
          <span className='subTitle'>{this.props.name}</span>
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
