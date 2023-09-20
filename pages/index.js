import React from 'react';
import LinkCollector from '../src/components/LinkCollector';

function Home() {
  return (
    <div>
      <h1>Welcome to Your Playlist Archiver</h1>
      <p>Enter a Spotify playlist link to archive it.</p>
      <LinkCollector />
    </div>
  );
}

export default Home;
