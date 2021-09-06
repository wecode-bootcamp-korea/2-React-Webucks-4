import React from 'react';
import { Link } from 'react-router-dom';

class CoffeeCard extends React.Component {
  render() {
    return (
      <Link to='/Detail' id='menu'>
        <div className='fit'>
          <img src={this.props.img} alt='coffee' />
        </div>
        <div className='Name'>{this.props.Name}</div>
      </Link>
    );
  }
}

export default CoffeeCard;
