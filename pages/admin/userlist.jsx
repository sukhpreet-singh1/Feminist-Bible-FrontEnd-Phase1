import React from 'react';

import UserList from '../../src/Components/Admin/UserList/UserList';
import Layout from '../../src/Hoc/Layout';
import ProtectedAdminRoute from '../../src/Hoc/ProtectedAdminRoute';

const userList = () => {
  return (
    <ProtectedAdminRoute>
      <Layout>
        <UserList />
      </Layout>
    </ProtectedAdminRoute>
  );
};

export default userList;
