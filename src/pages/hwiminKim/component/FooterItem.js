import React, { Component } from 'react';
import './FooterItem.scss';

class FooterItem extends Component {
  render() {
    const footerCategory = this.props.category;
    return (
      <ul className='footerItemList'>
        {footerCategory.map(el => {
          return (
            <li key={el.id} className='footerItem'>
              {el.content}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default FooterItem;
