// EmailButton.js
import React from 'react';
import emailLogo from './img/email-outline.png';
import classNames from 'classnames/bind';
import styles from './LinkBar.module.css';

const cx = classNames.bind(styles);

const EmailButton = () => {
  return (
    <div className={cx('email-link')}>
      <a href="https://github.com/nayatrov" target="_blank" rel="noopener noreferrer">
        <img src={emailLogo} alt="Email" />
      </a>
    </div>
  );
};

export default EmailButton;
