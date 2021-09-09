import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DetailTitle.scss';

class DetailTitle extends Component {
  render() {
    const { category, name } = this.props;
    return (
      <section className='DetailTitle'>
        <h1>{category}</h1>
        <ul className='linktap'>
          <li>
            <Link to='/login-yebomlee'> 홈 </Link> &#62;
          </li>
          <li>
            <a href='/'> MENU </a> &#62;
          </li>
          <li>
            <Link to='/list-yebomlee'> 음료 </Link> &#62;
          </li>
          <li>
            <a href='/'> {category} </a> &#62;
          </li>
          <li>
            <a href='/'> {name}</a>
          </li>
        </ul>
      </section>
    );
  }
}

export default DetailTitle;
