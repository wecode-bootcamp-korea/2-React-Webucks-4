import React, { Component } from 'react';
import './Allergen.scss';

class Allergen extends Component {
  render() {
    return (
      <div className='Allergen'>알레르기 유발요인 : {this.props.allergen}</div>
    );
  }
}

export default Allergen;
