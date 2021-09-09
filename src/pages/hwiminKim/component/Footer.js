import React, { Component } from 'react';
import FooterItem from './FooterItem';
import { FOOTER_INFO } from '../data/FOOTER_DATA';
import './Footer.scss';

class Footer extends Component {
  render() {
    const categories = Object.keys(FOOTER_INFO);
    return (
      <footer className='Footer'>
        {categories.map(category => {
          return <FooterItem category={FOOTER_INFO[category]} />;
        })}
      </footer>
    );
  }
}

export default Footer;
