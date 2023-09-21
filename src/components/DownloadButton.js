import React from 'react';

function DownloadButton({ fileName }) {
  const downloadUrl = `/downloads/${fileName}`;

  return (
    <a href={downloadUrl} download>
      Download Playlist
    </a>
  );
}

export default DownloadButton;