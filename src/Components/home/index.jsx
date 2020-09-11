import React from 'react';

import About from './About';
import Subscribe from './Subscribe';
import Welcome from './Welcome';

const LandingPage = () => {
  return (
    <div>
      <Welcome />
      <Subscribe />
      <About />
    </div>
  );
};

export default LandingPage;
