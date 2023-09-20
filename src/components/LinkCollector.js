import React, { useState } from 'react';
import axios from 'axios';

function LinkCollector() {
  const [playlistURL, setPlaylistURL] = useState('');
  const [message, setMessage] = useState('');
  
  const handleDownload = async () => {
    try {
      const response = await axios.post('/api/archive-spotify-playlist-api-endpoint', {
        playlistURL,
      });

      const blob = new Blob([JSON.stringify(response.data)], {
        type: 'application/json',
      });
      
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${playlistName}-playlist.json`; // Specify the desired file name
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error archiving playlist:', error);
    }
  };

  const handleChange = (event) => {
    setPlaylistURL(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Enter Spotify Playlist Link" onChange={handleChange} />
      <button onClick={handleDownload}>Download Playlist</button>
    </div>
  );
}

export default LinkCollector;
