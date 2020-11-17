import React from 'react';

import UserList from '../../src/Components/Admin/UserList/UserList';
import ProtectedAdminRoute from '../../src/Hoc/ProtectedAdminRoute';

const userList = () => {
  return (
    <ProtectedAdminRoute>
      <UserList />
    </ProtectedAdminRoute>
  );
};

export default userList;
