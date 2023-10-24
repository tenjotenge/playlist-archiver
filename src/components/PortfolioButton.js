// PortfolioButton.js
import React from 'react';
import classNames from 'classnames/bind';
import styles from './LinkBar.module.css';

const cx = classNames.bind(styles);

const PortfolioButton = () => {
  return (
    <div className={cx('portfolio-link')}>
      <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
        My Portfolio
      </a>
    </div>
  );
};

export default PortfolioButton;
