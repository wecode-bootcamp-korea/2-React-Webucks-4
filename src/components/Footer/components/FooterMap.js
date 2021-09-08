import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FooterMap.scss';

export default class FooterMap extends Component {
  render() {
    return (
      <nav className='FooterMap'>
        {this.props.footerMap.map((data, i) => {
          return (
            <ul key={i} className={data.header}>
              <h4>{data.header}</h4>
              {data.links?.map((link, i) => {
                return (
                  <li key={i}>
                    <Link to={link.url}>{link.destination}</Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </nav>
    );
  }
}
