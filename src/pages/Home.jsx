import React from 'react';
import { Top, Services } from '../components';

export default function Home({ appState }) {

  return (
    <> 
      <Top items={appState.slider}/>
      <Services items={appState.sliderServices} />
    </>
  );
}

