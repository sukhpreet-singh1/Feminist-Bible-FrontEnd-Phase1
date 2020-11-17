import React from 'react';

import Profile from '../src/Components/Profile/Profile';
import ProtectedUserRoute from '../src/Hoc/ProtectedUserRoute';

const userList = () => {
  return (
    <ProtectedUserRoute>
      <Profile />
    </ProtectedUserRoute>
  );
};

export default userList;
