import React, { useState } from 'react';

function LinkCollector() {
  const [playlistURL, setPlaylistURL] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/archive-spotify-playlist-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ playlistURL }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        const errorData = await response.json();
        setMessage(errorData.error);
      }
    } catch (error) {
      setMessage('An error occurred while archiving the playlist.');
    }
  };

  return (
    <div>
      <h2>Archive Spotify Playlist</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Spotify Playlist URL:
          <input
            type="text"
            value={playlistURL}
            onChange={(e) => setPlaylistURL(e.target.value)}
          />
        </label>
        <button type="submit">Archive</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default LinkCollector;
