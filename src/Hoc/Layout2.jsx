import React from 'react';

import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

function Layout({ /* eslint-disable react/prop-types */ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
