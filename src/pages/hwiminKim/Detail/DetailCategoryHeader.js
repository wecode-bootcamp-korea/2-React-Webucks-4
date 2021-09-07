import React, { Component } from 'react';
import Breadcrumb from '../component/Breadcrumb';

import './DetailCategoryHeader.scss';

class DetailCategoryHeader extends Component {
  render() {
    const category = this.props.productData?.category;
    return (
      <header className='DetailCategoryHeader'>
        <h1>{category}</h1>
        <Breadcrumb productData={this.props.productData} />
      </header>
    );
  }
}
export default DetailCategoryHeader;
