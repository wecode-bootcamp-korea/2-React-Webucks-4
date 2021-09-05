import React, { Component } from 'react';
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
        <ul className='footerItemList'>
          {company.map(el => {
            return (
              <li key={el.id} className='footerItem'>
                {el.content}
              </li>
            );
          })}
        </ul>

        <ul className='footerItemList'>
          {corporateSales.map(el => {
            return (
              <li key={el.id} className='footerItem'>
                {el.content}
              </li>
            );
          })}
        </ul>

        <ul className='footerItemList'>
          {partnership.map(el => {
            return (
              <li key={el.id} className='footerItem'>
                {el.content}
              </li>
            );
          })}
        </ul>

        <ul className='footerItemList'>
          {onlineCommunity.map(el => {
            return (
              <li key={el.id} className='footerItem'>
                {el.content}
              </li>
            );
          })}
        </ul>

        <ul className='footerItemList'>
          {recruit.map(el => {
            return (
              <li key={el.id} className='footerItem'>
                {el.content}
              </li>
            );
          })}
        </ul>

        <ul className='footerItemList'>
          {webucks.map(el => {
            return <li className='footerItem'>{el.content}</li>;
          })}
        </ul>
      </footer>
    );
  }
}

export default Footer;
