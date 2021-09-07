import React, { Component } from 'react';
import Breadcrumb from '../component/Breadcrumb';

import './DetailCategoryHeader.scss';

class DetailCategoryHeader extends Component {
  render() {
    const category = this.props.description?.category;
    return (
      <header className='DetailCategoryHeader'>
        <h1>{category}</h1>
        <Breadcrumb description={this.props.description} />
      </header>
    );
  }
}
export default DetailCategoryHeader;
