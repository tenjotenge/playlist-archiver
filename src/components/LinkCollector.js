import React, { useState } from 'react';
import handler from '../../pages/api/archive-spotify-playlist-api-endpoint'; 

function LinkCollector() {
  const [playlistURL, setPlaylistURL] = useState('');

  const handleChange = (event) => {
    setPlaylistURL(event.target.value);
  };

  const handleDownload = async () => {
    try {
      const response = await handler({ method: 'POST', body: JSON.stringify({ playlistURL }) });

      const blob = await response.blob();

      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'playlist.json';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Playlist Link"
        value={playlistURL}
        onChange={handleChange}
      />
      <button onClick={handleDownload}>Download JSON</button>
    </div>
  );
}

export default LinkCollector;
