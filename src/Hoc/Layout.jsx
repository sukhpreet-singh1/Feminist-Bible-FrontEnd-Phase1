import React from 'react';

import Footer from '../Components/Header_footer/Footer';
import Header from '../Components/Header_footer/Header';

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
