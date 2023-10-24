// GitHubButton.js
import React from 'react';
import gitHubLogo from './img/github-outline.svg';
import classNames from 'classnames/bind';
import styles from './LinkBar.module.css';

const cx = classNames.bind(styles);

const GitHubButton = () => {
  return (
    <div className={cx('github-link')}>
      <a href="https://github.com/tenjotenge" target="_blank" rel="noopener noreferrer">
        <img src={gitHubLogo} alt="GitHub" />
      </a>
    </div>
  );
};

export default GitHubButton;
