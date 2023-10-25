// GitHubButton.js
import React from 'react';
import classNames from 'classnames/bind';
import styles from './LinkBar.module.css';

const cx = classNames.bind(styles);

const GitHubButton = () => {
  return (
    <div className={cx('github-link', 'link-item')}>
      <a href="https://github.com/tenjotenge" target="_blank" rel="noopener noreferrer">
        <img src="/logos/github-outline.svg" alt="GitHub" style={{ width: '40px', height: '40px' }} />
      </a>
    </div>
  );
};

export default GitHubButton;
