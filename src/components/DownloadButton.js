import React from 'react';
import classNames from 'classnames/bind';
import styles from './DownloadButton.module.css';

const cx = classNames.bind(styles);

function DownloadButton() {
  const downloadUrl = '/public/downloads/playlist.json';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'playlist.json';
    link.click();
  };

  return (
    <button className={cx('download-button')} onClick={handleDownload}>
      Download Playlist
    </button>
  );
}

export default DownloadButton;
