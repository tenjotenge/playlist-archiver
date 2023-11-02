import React, { useState } from 'react';
import axios from 'axios';
import DownloadButton from './DownloadButton';
import classNames from 'classnames/bind';
import styles from './LinkCollector.module.css';
import LinkBar from './LinkBar';
import PresentationButtons from './PresentationButtons';

const cx = classNames.bind(styles);


function LinkCollector() {
  const [playlistURL, setPlaylistURL] = useState('');

  const handleChange = (event) => {
    setPlaylistURL(event.target.value);
  };

  // Modify this function to trigger the API call when the user clicks the button
  const handleDownload = async () => {
    try {
      const response = await axios.post('https://playlist-archiver-six.vercel.app/api/exportSpotifyPlaylist', {
        playlistURL,
      });

      if (response.status === 200) {
        // Handle success if needed
        console.log('Playlist archived successfully');
      } else {
        throw new Error(`Error archiving playlist: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={cx('lc-container')}>
      <div className={cx('input-container')}>
        <input className={cx('input-box')} type="text" placeholder="Enter Spotify Playlist Link" onChange={handleChange} />
      </div>
      <div className={cx('buttons-container')}>
        <button className={cx('archive-button')} onClick={handleDownload}>Archive Playlist</button>
        <DownloadButton/>
      </div>
      <PresentationButtons />
      <LinkBar />
    </div>
  );
}

export default LinkCollector;
