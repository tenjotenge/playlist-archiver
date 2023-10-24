import React from 'react';
import LinkCollector from '../src/components/LinkCollector';
import Banner from '../src/components/Banner';
import LinkBar from '@/components/LinkBar';

function Home() {
  return (
    <div>
      <Banner />
      <LinkCollector />
      <LinkBar />
    </div>
  );
}

export default Home;
