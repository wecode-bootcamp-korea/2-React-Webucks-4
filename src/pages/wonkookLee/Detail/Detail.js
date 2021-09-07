import React, { Component } from 'react';
import { addDetailBodyStyle, removeDetailBodyStyle } from '../utils';
import TopNav from '../../../components/Nav/TopNav';
import Footer from '../../../components/Footer/Footer';
import MainImgFrame from './components/MainImgFrame';
import ProdDesc from './components/ProdDesc';
import Comment from './components/Comment';
import BreadCrumb from './components/BreadCrumb';
import './Detail.scss';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      hasUserLiked: false,
    };
  }

  componentDidMount() {
    addDetailBodyStyle();
    fetch('http://localhost:3000/data/PRODUCTS.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        const item = data.find(
          e => e.id === parseInt(this.props.match.params.id)
        );
        this.setState({
          products: item,
        });
      })
      .catch(console.log);
  }

  componentWillUnmount() {
    removeDetailBodyStyle();
  }

  hasUserLiked = () => {
    this.setState({
      hasUserLiked: !this.state.hasUserLiked,
    });
  };

  render() {
    const products = this.state.products;
    const { name, category } = this.state.products;
    return (
      <div id='wrap'>
        <TopNav />

        <div id='container'>
          <div className='sub_tit_wrap'>
            <div className='sub_tit_inner'>
              <h2>
                <img
                  src='https://image.istarbucks.co.kr/common/img/menu/tit/drink_tit9.png'
                  alt='콜드 브루'
                />
              </h2>
              <BreadCrumb name={name} category={category} />
            </div>
          </div>

          <div className='content'>
            <div className='product_view_wrap1 clearfix'>
              <MainImgFrame imgUrl={products?.imgUrl} name={products?.name} />
              <ProdDesc
                name={products?.name}
                engName={products?.engName}
                summary={products?.summary}
                nutritionFacts={products?.nutritionFacts}
                hasUserLiked={this.hasUserLiked}
              />
              <Comment />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Detail;
