import React, { Component } from 'react';
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
    fetch('/data/PRODUCTS.json')
      .then(res => res.json())
      .then(data => {
        const item = data.find(
          e => e.id === parseInt(this.props.match.params.id)
        );
        this.setState({
          products: item,
        });
      })
      .catch(() =>
        this.setState({
          products: {
            name: '',
            category: '',
            imgUrl: '',
            engName: '',
            summary: '',
            nutritionFacts: [],
          },
        })
      );
  }

  hasUserLiked = () => {
    this.setState({
      hasUserLiked: !this.state.hasUserLiked,
    });
  };

  render() {
    const { name, engName, category, imgUrl, summary, nutritionFacts } =
      this.state.products;
    return (
      <div id='wrap' className='Detail'>
        <TopNav />

        <div id='container'>
          <div className='subTitWrap'>
            <div className='subTitInner'>
              <h2>
                <img
                  src={`https://image.istarbucks.co.kr/common/img/menu/tit/drink_tit${
                    category === '콜드 브루 커피' ? 9 : 1
                  }.png`}
                  alt='콜드 브루'
                />
              </h2>
              <BreadCrumb name={name} category={category} />
            </div>
          </div>

          <div className='content'>
            <div className='productViewWrap'>
              <MainImgFrame imgUrl={imgUrl} name={name} />
              <ProdDesc
                name={name}
                engName={engName}
                summary={summary}
                nutritionFacts={nutritionFacts}
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
