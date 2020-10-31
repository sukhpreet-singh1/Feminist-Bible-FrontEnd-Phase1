import React from 'react';

import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';

import Section4 from './Section4/Section4';
/* import About from './About/About';
import Codeofconduct from './CodeOfConduct/Codeofconduct';
import Communityg from './CommunityGuidelines/Communityg';
import Meet from './Meet/Meet';
// import Subscribe from './Subscribe/Subscribe';
import Welcome from './Welcome/Welcome'; */

const LandingPage = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      
      <Section4 />
    </div>
  );
};

export default LandingPage;
