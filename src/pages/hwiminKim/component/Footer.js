import React, { Component } from 'react';
import FooterItem from './FooterItem';
import { FOOTER_INFO } from '../data/FOOTER_DATA';
import './Footer.scss';

const {
  company,
  corporateSales,
  partnership,
  onlineCommunity,
  recruit,
  webucks,
} = FOOTER_INFO;

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <FooterItem category={company} />
        <FooterItem category={corporateSales} />
        <FooterItem category={partnership} />
        <FooterItem category={onlineCommunity} />
        <FooterItem category={recruit} />
        <FooterItem category={webucks} />
      </footer>
    );
  }
}

export default Footer;
