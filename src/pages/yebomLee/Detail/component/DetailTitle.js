import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DetailTitle.scss';

class DetailTitle extends Component {
  render() {
    return (
      <section className='DetailTitle'>
        <h1>{this.props.category}</h1>
        <div className='linktap'>
          <Link to='/login-yebomlee'> 홈 </Link> &#62;
          <a href='/'> MENU </a> &#62;
          <Link to='/list-yebomlee'> 음료 </Link> &#62;
          <a href='/'> {this.props.category} </a> &#62;
          <a href='/'> {this.props.name}</a>
        </div>
      </section>
    );
  }
}

export default DetailTitle;
