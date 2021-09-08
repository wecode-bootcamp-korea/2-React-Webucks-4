import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './ProductList.scss';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeOn: false,
    };
  }

  togleLike = () => {
    this.setState({ likeOn: !this.state.likeOn });
  };

  render() {
    const { id, name, imgUrl } = this.props.data;
    const { likeOn } = this.state;

    return (
      <div className='product'>
        <Link
          to={{
            pathname: `/Detail-siwonkim/${id}`,
            paramas: id,
          }}
          className='productImg'
        >
          <img src={imgUrl} alt={name} className='boxElements' />
        </Link>
        <FontAwesomeIcon
          icon={faHeart}
          className={likeOn ? 'likeOn' : 'likeOff'}
          onClick={this.togleLike}
        />
        <span class='caption'>{name}</span>
      </div>
    );
  }
}

export default ProductList;
