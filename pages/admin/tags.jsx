import React from 'react';

import Tags from '../../src/Components/Admin/Tags/Tags';
import ProtectedAdminRoute from '../../src/Hoc/ProtectedAdminRoute';

const TagsPage = () => {
  return (
    <ProtectedAdminRoute>
      <Tags />
    </ProtectedAdminRoute>
  );
};

export default TagsPage;
