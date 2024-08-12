import React from 'react';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Build from '../components/Build';
import Creations from '../components/Creations';
import Features from '../components/Features';
import InstantlyCustomize from '../components/InstantlyCustomize';
import Logos from '../components/Logos';
import ChatBox from '../components/ChatBox';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Slider />
      <Logos/>
      <Build />
      <ChatBox />
      <InstantlyCustomize />
      <Creations />
      <Features />
    </div>
  );
};

export default HomePage;
