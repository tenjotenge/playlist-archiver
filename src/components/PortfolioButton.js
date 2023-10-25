// PortfolioButton.js
import React from 'react';
import classNames from 'classnames/bind';
import styles from './LinkBar.module.css';

const cx = classNames.bind(styles);

const PortfolioButton = () => {
  return (
    <div className={cx('portfolio-link', 'link-item')}>
      <a href="YOUR_PORTFOLIO_URL" target="_blank" rel="noopener noreferrer">
        <img src="/logos/portfolio-outline.svg" alt="Portfolio" style={{ width: '40px', height: '40px' }} />
      </a>
    </div>
  );
};

export default PortfolioButton;
