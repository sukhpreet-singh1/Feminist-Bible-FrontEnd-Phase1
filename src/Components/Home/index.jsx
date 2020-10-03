import React from 'react';

import About from './About/About';
import Codeofconduct from './CodeOfConduct/Codeofconduct';
import Communityg from './CommunityGuidelines/Communityg';
import Meet from './Meet/Meet';
// import Subscribe from './Subscribe/Subscribe';
import Welcome from './Welcome/Welcome';

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
