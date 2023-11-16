import React from 'react';
import LinkCollector from '../src/components/LinkCollector';
import Banner from '../src/components/Banner';
import CreditCardForm from '@/components/CreditCardForm';

function Home() {
  return (
    <div>
      <Banner />
      <CreditCardForm />
      <LinkCollector />
    </div>
  );
}

export default Home;
