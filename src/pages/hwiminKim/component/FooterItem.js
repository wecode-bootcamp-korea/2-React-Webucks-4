import React, { Component } from 'react';
import './FooterItem.scss';

class FooterItem extends Component {
  render() {
    return (
      <ul className='footerItemList'>
        {this.props.category.map(el => {
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
