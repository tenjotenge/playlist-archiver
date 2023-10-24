import React from 'react';
import emailLogo from './img/email-outline.png'

const EmailButton = () => {
  return (
    <div className="email-link">
      <a href="https://github.com/nayatrov" target="_blank" rel="noopener noreferrer">
        <img src={emailLogo} alt="Email" />
      </a>
    </div>
  );
};

export default EmailButton;