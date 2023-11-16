import React from 'react';
import classNames from 'classnames/bind';
import styles from './DownloadButton.module.css';

const cx = classNames.bind(styles);

function DownloadButton({ filePath }) {
  const handleDownload = () => {
    if (filePath) {
      fetch(`/api/download?filePath=${encodeURIComponent(filePath)}`)
        .then((response) => {
          if (response.ok) {
            // Create a blob from the response
            return response.blob();
          } else {
            throw new Error(`Error downloading file: ${response.status}`);
          }
        })
        .then((blob) => {
          // Create a link element and trigger a click to download the file
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(new Blob([blob]));
          link.download = filePath.split('/').pop(); // Extract the filename from the path
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.error('Download error:', error);
        });
    }
  };

  return (
    <button className={cx('download-button')} onClick={handleDownload}>
      Download Playlist
    </button>
  );
}

export default DownloadButton;
