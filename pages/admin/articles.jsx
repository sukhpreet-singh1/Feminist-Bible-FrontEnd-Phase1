import React from 'react';

import Articles from '../../src/Components/Admin/Articles/Articles';
import ProtectedAdminRoute from '../../src/Hoc/ProtectedAdminRoute';

const ArticlesPage = () => {
  return (
    <ProtectedAdminRoute>
      <Articles />
    </ProtectedAdminRoute>
  );
};

export default ArticlesPage;
