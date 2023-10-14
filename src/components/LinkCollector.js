import React, { useState } from 'react';
import axios from 'axios';
import DownloadButton from './DownloadButton';

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
    <div>
      <input type="text" placeholder="Enter Spotify Playlist Link" onChange={handleChange} />
      <button onClick={handleDownload}>Archive Playlist</button>
      <DownloadButton fileName={`${playlistName}-playlist.json`} />
    </div>
  );
}

export default LinkCollector;
