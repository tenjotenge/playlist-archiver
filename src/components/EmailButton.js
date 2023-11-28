// EmailButton.js
import React from 'react';
import classNames from 'classnames/bind';
import styles from './LinkBar.module.css';

const cx = classNames.bind(styles);

const EmailButton = () => {
  return (
    <div className={cx('email-link', 'link-item')} data-tooltip="Email Me">
      <a href="mailto:jah0094@mix.wvu.edu">
        <img src="/logos/email-outline.svg" alt="Email" style={{ width: '40px', height: '40px' }} />
      </a>
    </div>
  );
};

export default EmailButton;
