import React from 'react';
import classNames from 'classnames/bind';
import styles from './DownloadButton.module.css';

const cx = classNames.bind(styles);

function DownloadButton() {
  const downloadUrl = '/public/downloads/playlist.json';

  const handleDownload = () => {
    const url = '/downloads/playlist.json'; // Adjust the URL as needed
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'playlist.json';
    anchor.click();
  };

  return (
    <button className={cx('download-button')} onClick={handleDownload}>
      Download Playlist
    </button>
  );
}

export default DownloadButton;
