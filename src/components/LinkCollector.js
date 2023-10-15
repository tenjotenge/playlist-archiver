import React, { useState } from 'react';
import axios from 'axios';
import DownloadButton from './DownloadButton';
import classNames from 'classnames/bind';
import styles from './LinkCollector.module.css';

const cx = classNames.bind(styles);


function LinkCollector() {
  const [playlistURL, setPlaylistURL] = useState('');

  const handleChange = (event) => {
    setPlaylistURL(event.target.value);
  };
  const playlistName = ''

  // Modify this function to trigger the API call when the user clicks the button
  const handleDownload = () => {
    fetch('/api/archive-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        playlistURL,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Handle success if needed
          console.log('Playlist archived successfully');
        } else {
          throw new Error(`Error archiving playlist: ${response.status}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={cx('lc-container')}>
      <div className={cx('input-container')}>
        <input className={cx('input-box')} type="text" placeholder="Enter Spotify Playlist Link" onChange={handleChange} />
      </div>
      <div className={cx('buttons-container')}>
        <button className={cx('archive-button')} onClick={handleDownload}>Archive Playlist</button>
        <DownloadButton fileName={`${playlistName}-playlist.json`} />
      </div>
    </div>
  );
}

export default LinkCollector;
