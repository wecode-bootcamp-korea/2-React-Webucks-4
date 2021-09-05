import React, { Component } from 'react';
import FormBox from './FormBox';

import '../Login/Login.scss';
import logo from './webuckslogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idInput: '',
      pwInput: '',
      seePw: false,
      IdOn: false,
      PwOn: false,
    };
  }

  handleIdInput = e => {
    this.setState({ idInput: e.target.value }, () => {
      this.state.idInput.includes('@')
        ? this.setState({ IdOn: true })
        : this.setState({ IdOn: false });
    });
  };

  handlePwInput = e => {
    // if(e.target.key === 'Enter')
    this.setState({ pwInput: e.target.value }, () => {
      this.state.pwInput.length >= 5
        ? this.setState({ PwOn: true })
        : this.setState({ PwOn: false });
    });
  };

  handleSeePw = () => {
    this.setState({ seePw: !this.state.seePw });
  };

  render() {
    return (
      <div className='Login'>
        <section className='backBoard'>
          <img className='logo' alt='webucks logo' src={logo} />
          <FormBox
            changeId={this.handleIdInput}
            changePw={this.handlePwInput}
            idOn={this.state.IdOn}
            pwOn={this.state.PwOn}
            seePw={this.state.seePw}
          />
          <FontAwesomeIcon
            icon={this.state.seePw ? faEye : faEyeSlash}
            className='eye'
            onClick={this.handleSeePw}
          />
          <a className='a' target='blank' href='https://pspace21.tistory.com/'>
            비밀번호를 잊으셨나요??
          </a>
        </section>
      </div>
    );
  }
}

export default Login;
