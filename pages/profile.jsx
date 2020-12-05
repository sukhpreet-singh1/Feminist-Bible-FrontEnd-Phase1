import React from 'react';

import Profile from '../src/Components/Profile/Profile';
import ProtectedUserRoute from '../src/Hoc/ProtectedUserRoute';

const profilePage = () => {
  return (
    <ProtectedUserRoute>
      <Profile />
    </ProtectedUserRoute>
  );
};

export default profilePage;
