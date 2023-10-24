// PortfolioButton.js
import React from 'react';
import portfolioLogo from './img/portfolio-logo.png'; // Replace with the actual path to your portfolio image
import classNames from 'classnames/bind';
import styles from './LinkBar.module.css';

const cx = classNames.bind(styles);

const PortfolioButton = () => {
  return (
    <div className={cx('portfolio-link')}>
      <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
        <img src={portfolioLogo} alt="Portfolio" />
      </a>
    </div>
  );
};

export default PortfolioButton;
