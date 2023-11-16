import React, { useState } from 'react';
import DownloadButton from './DownloadButton';
import classNames from 'classnames/bind';
import styles from './LinkCollector.module.css';
import LinkBar from './LinkBar';
import PresentationButtons from './PresentationButtons';

const cx = classNames.bind(styles);

function LinkCollector() {
  const [playlistURL, setPlaylistURL] = useState('');
  const [filePath, setFilePath] = useState(null);

  const handleChange = (event) => {
    setPlaylistURL(event.target.value);
  };

  const handleDownload = () => {
    fetch('/api/exportSpotifyPlaylist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        playlistURL,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setFilePath(data.data.filePath);
          console.log('Playlist archived successfully');
        } else {
          console.error('Error archiving playlist:', data.error);
        }
      })
      .catch((error) => {
        console.error('Network error:', error);
      });
  };

  return (
    <div className={cx('lc-container')}>
      <div className={cx('input-container')}>
        <input className={cx('input-box')} type="text" placeholder="Enter Spotify Playlist Link" onChange={handleChange} />
      </div>
      <div className={cx('buttons-container')}>
        <button className={cx('archive-button')} onClick={handleDownload}>Archive Playlist</button>
        <DownloadButton filePath={filePath} />
      </div>
      <PresentationButtons />
      <LinkBar />
    </div>
  );
}

export default LinkCollector;