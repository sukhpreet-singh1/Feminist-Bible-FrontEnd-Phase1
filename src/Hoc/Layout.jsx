import React from 'react';

import Footer from '../Components/header_footer/Footer';
import Header from '../Components/header_footer/Header';

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
