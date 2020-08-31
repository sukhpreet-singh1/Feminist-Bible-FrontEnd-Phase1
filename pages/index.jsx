import React from 'react';

import Featured from '../src/Components/home/featured';
import Layout from '../src/Hoc/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="bck_blue">
        <Featured />
      </div>
    </Layout>
  );
};

export default Home;
