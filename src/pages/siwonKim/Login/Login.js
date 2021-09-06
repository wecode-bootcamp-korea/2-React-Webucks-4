import React, { Component } from 'react';
import FormBox from './FormBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import logo from './webuckslogo.png';
import '../Login/Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIdValid: false,
      isPwValid: false,
      seePw: false,
    };
  }

  handleIdInput = e => {
    const { value } = e.target;
    value.includes('@')
      ? this.setState({ isIdValid: true })
      : this.setState({ isIdValid: false });
  };

  handlePwInput = e => {
    const { value } = e.target;
    value.length >= 5
      ? this.setState({ isPwValid: true })
      : this.setState({ isPwValid: false });
  };

  handleSeePw = () => {
    this.setState({ seePw: !this.state.seePw });
  };

  render() {
    const { isIdValid, isPwValid, seePw } = this.state;

    return (
      <div className='Login'>
        <section className='backBoard'>
          <img className='logo' alt='webucks logo' src={logo} />
          <FormBox
            handleIdInput={this.handleIdInput}
            handlePwInput={this.handlePwInput}
            isIdValid={isIdValid}
            isPwValid={isPwValid}
            seePw={seePw}
          />
          <FontAwesomeIcon
            icon={seePw ? faEye : faEyeSlash}
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
