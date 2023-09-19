import React, { useState } from 'react';


function LinkCollector() {
  const [playlistURL, setPlaylistURL] = useState('');
  
  const handleChange = (event) => {
    setPlaylistURL(event.target.value);
  };

  const handleDownload = async () => {
    // Call the downloadPlaylist function with the entered playlistURL
    // Implement the downloadPlaylist function logic here
    // Replace 'YOUR_DOWNLOAD_FUNCTION' with your actual function
    try {
      const response = await YOUR_DOWNLOAD_FUNCTION(playlistURL);
      
      // Assuming your download function returns a Blob or File
      const blob = await response.blob();
      
      // Create a temporary link element to trigger the download
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'playlist.json'; // Specify the filename you want
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
