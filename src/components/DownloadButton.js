import React from 'react';
import classNames from 'classnames/bind';
import styles from './DownloadButton.module.css';

const cx = classNames.bind(styles);

function DownloadButton({ fileName }) {
  const downloadUrl = `/downloads/${fileName}`;

  return (
    <a href={downloadUrl} download>
      Download Playlist
    </a>
  );
}

export default DownloadButton;