import React from 'react';
import classNames from 'classnames/bind';
import styles from './DownloadButton.module.css';

const cx = classNames.bind(styles);

function DownloadButton({ fileName }) {
  
  const handleDownload = () => {
    if (fileName) {
      const url = `/downloads/${fileName}`;
      const downloadFileName = fileName.replace('.json', ''); // Remove the .json extension
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = downloadFileName;
      anchor.click();
    }
  };

  return (
    <button className={cx('download-button')} onClick={handleDownload}>
      Download Playlist
    </button>
  );
}

export default DownloadButton;

