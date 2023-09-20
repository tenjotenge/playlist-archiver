import React from 'react';
import LinkCollector from '../src/components/LinkCollector';
import DownloadButton from '@/components/DownloadButton';

function Home() {
  return (
    <div>
      <h1>Welcome to Your Playlist Archiver</h1>
      <p>Enter a Spotify playlist link to archive it.</p>
      <LinkCollector />
      <DownloadButton />
    </div>
  );
}

export default Home;
