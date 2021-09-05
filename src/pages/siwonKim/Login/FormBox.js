import React, { Component } from 'react';
import IdInput from './IdInput';
import PwInput from './PwInput';
import { Link } from 'react-router-dom';

import './FormBox.scss';

class FormBox extends Component {
  handleOnclick = () => {
    alert('유효한 ID와 비밀번호가 아닙니다!');
  };

  render() {
    return (
      <form className='FormBox' action=''>
        <IdInput changeId={this.props.changeId} idOn={this.props.idOn} />
        <PwInput
          changePw={this.props.changePw}
          idOn={this.props.idOn}
          pwOn={this.props.pwOn}
          seePw={this.props.seePw}
        />
        {this.props.idOn && this.props.pwOn ? (
          <Link to='/List-siwonkim' className='btnOn' type='button'>
            로그인
          </Link>
        ) : (
          <button className='btn' type='button' onClick={this.handleOnclick}>
            로그인
          </button>
        )}
        {/* <Link
          to='/List-siwonkim'
          className={this.props.idOn && this.props.pwOn ? 'btnOn' : 'btn'}
          type='button'
          onclick='goToList()'
        >
          로그인
        </Link> */}
      </form>
    );
  }
}

export default FormBox;
