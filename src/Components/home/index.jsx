import React from 'react';

import About from './About';
// import Subscribe from './Subscribe';
import Welcome from './Welcome';

const LandingPage = () => {
  return (
    <div className="homepage-container">
      <Welcome />
      {/* <Subscribe /> */}
      <About />
    </div>
  );
};

export default LandingPage;
