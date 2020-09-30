import React from 'react';

import About from './About';
import Codeofconduct from './Codeofconduct';
import Communityg from './Communityg';
import Meet from './Meet';
// import Subscribe from './Subscribe';
import Welcome from './Welcome';

const LandingPage = () => {
  return (
    <div className="homepage-container">
      <Welcome />
      {/* <Subscribe /> */}
      <About />
      <Communityg />
      <Codeofconduct />
      <Meet />
    </div>
  );
};

export default LandingPage;
