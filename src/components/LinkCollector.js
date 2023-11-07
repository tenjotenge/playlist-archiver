import React, { useState, useEffect } from 'react';
import DownloadButton from './DownloadButton';
import classNames from 'classnames/bind';
import styles from './LinkCollector.module.css';
import LinkBar from './LinkBar';
import PresentationButtons from './PresentationButtons';

const cx = classNames.bind(styles);

function LinkCollector() {
  const [playlistURL, setPlaylistURL] = useState('');
  const [fileName, setFileName] = useState(null);

  const handleChange = (event) => {
    setPlaylistURL(event.target.value);
  };

  // Trigger the API call when the user clicks the button using fetch
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
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse the response as JSON
        } else {
          throw new Error(`Error archiving playlist: ${response.status}`);
        }
      })
      .then((data) => {
        // Set the fileName in the state
        setFileName(data.fileName);
        console.log('Playlist archived successfully');
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
        <DownloadButton fileName={fileName} />
      </div>
      <PresentationButtons />
      <LinkBar />
    </div>
  );
}

export default LinkCollector;
