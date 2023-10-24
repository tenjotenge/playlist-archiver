// LinkBar.js
import React from 'react';
import classNames from 'classnames/bind';
import styles from './LinkBar.module.css';

const cx = classNames.bind(styles);

const LinkBar = () => {
  return (
    <div className={cx('lb-container')}>
      <a href="https://github.com/tenjotenge" target="_blank" rel="noopener noreferrer">
        <img src="github.png" alt="GitHub" />
      </a>
      <a href="https://tenjotenge.com" target="_blank" rel="noopener noreferrer">
        <img src="portfolio.png" alt="Portfolio" />
      </a>
      <button onClick={() => console.log('Third button clicked')}>
        <img src="third.png" alt="Third" />
      </button>
    </div>
  );
};

export default LinkBar;