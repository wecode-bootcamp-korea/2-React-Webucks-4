import React, { Component } from 'react';
import FooterMap from './components/FooterMap';
import './Footer.scss';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      footerMap: [],
    };
  }

  componentDidMount = () => {
    fetch('/data/FOOTER_MAP.json')
      .then(res => res.json())
      .then(data =>
        this.setState({
          footerMap: data,
        })
      );
  };

  render() {
    return (
      <footer>
        <FooterMap footerMap={this.state.footerMap} />
      </footer>
    );
  }
}

export default Footer;
