// LinkBar.js
import React from 'react';
import classNames from 'classnames/bind';
import styles from './LinkBar.module.css';
import GithubButton from './GithubButton';
import EmailButton from './EmailButton';
import PortfolioButton from './PortfolioButton';

const cx = classNames.bind(styles);

const LinkBar = () => {
  return (
    <div className={cx('lb-container')}>
      <GithubButton />
      <PortfolioButton />
      <EmailButton />
    </div>
  );
};

export default LinkBar;