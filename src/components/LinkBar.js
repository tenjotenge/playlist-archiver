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
    <nav className={cx('link-bar')}>
      <ul className={cx('link-ul')}>
        <li className={cx('link-item')}>
          <GithubButton />
        </li>
        <li className={cx('link-item')}>
          <PortfolioButton />
        </li>
        <li className={cx('link-item')}>
          <EmailButton />
        </li>
      </ul>
    </nav>
  );
};

export default LinkBar;
