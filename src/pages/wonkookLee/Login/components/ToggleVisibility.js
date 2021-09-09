import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import './ToggleVisibility.scss';

class ToggleVisibility extends Component {
  render() {
    return (
      <>
        <input id='icon' type='checkbox' onClick={this.props.viewPassword} />
        <FontAwesomeIcon
          className={`loginIcon ${this.props.iconToggle ? 'hidden' : ''}`}
          icon={faEye}
        />
        <FontAwesomeIcon
          className={`loginIcon ${this.props.iconToggle ? '' : 'hidden'}`}
          icon={faEyeSlash}
        />
      </>
    );
  }
}

export default ToggleVisibility;
