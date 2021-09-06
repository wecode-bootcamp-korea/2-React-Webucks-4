import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Caption from './Caption';
import ProductImg from './ProductImg';

import './ProductList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeOn: false,
    };
  }
  // json데이터 받고 나서
  // componentDidMount() {
  //   fetch('http://localhost:3000/data/myData.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         products: data.myData,
  //       });
  //     });
  // }

  togleLike = () => {
    this.setState({ likeOn: !this.state.likeOn });
  };

  render() {
    const data = this.props.data;
    // console.log(data);
    return (
      <div className='product'>
        <Link
          to={{
            pathname: `/Detail-siwonkim/${data.id}`,
            paramas: data.id,
          }}
        >
          <ProductImg key={data.id} name={data.name} Url={data.imgUrl} />
        </Link>
        <FontAwesomeIcon
          icon={faHeart}
          className={this.state.likeOn ? 'likeOn' : 'likeOff'}
          onClick={this.togleLike}
        />
        <Caption key={data.id} name={data.name} />
      </div>
    );
  }
}

export default ProductList;
