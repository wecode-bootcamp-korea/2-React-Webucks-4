import React, { Component } from 'react';
import './AlergenDesc.scss';

class AlergenDesc extends Component {
  render() {
    return (
      <div className='product_alergy'>
        <p className='alergy_warn'>
          {'알레르기 유발 요인 : ' + this.props.allergen}
        </p>
      </div>
    );
  }
}

export default AlergenDesc;
