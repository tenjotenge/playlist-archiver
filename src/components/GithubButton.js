import React from 'react';
import gitHubLogo from './img/github-outline.svg'

const GitHubButton = () => {
  return (
    <div className="github-link">
      <a href="https://github.com/tenjotenge" target="_blank" rel="noopener noreferrer">
        <img src={gitHubLogo} alt="GitHub" />
      </a>
    </div>
  );
};

export default GitHubButton;