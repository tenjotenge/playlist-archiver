import React, { useState } from 'react';
import axios from 'axios';
import DownloadButton from './DownloadButton'; // Import your DownloadButton component

function LinkCollector() {
  const [playlistURL, setPlaylistURL] = useState('');

  const handleChange = (event) => {
    setPlaylistURL(event.target.value);
  };
  const playlistName = ''

  // Modify this function to trigger the API call when the user clicks the button
  const handleDownload = () => {
    axios
      .post('/api/archive-spotify-playlist-api-endpoint', {
        playlistURL,
      })
      .then(() => {
        // Handle success if needed
        console.log('Playlist archived successfully');
      })
      .catch((error) => {
        console.error('Error archiving playlist:', error);
      });
  };

  return (
    <div>
      <input type="text" placeholder="Enter Spotify Playlist Link" onChange={handleChange} />
      <button onClick={handleDownload}>Archive Playlist</button>
      <DownloadButton fileName={`${playlistName}-playlist.json`} />
    </div>
  );
}

export default LinkCollector;
