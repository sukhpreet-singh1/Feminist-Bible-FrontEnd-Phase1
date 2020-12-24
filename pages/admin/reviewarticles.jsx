import React from 'react';

import ReviewArticles from '../../src/Components/Admin/ReviewArticles/Review';
import ProtectedAdminRoute from '../../src/Hoc/ProtectedAdminRoute';

const ReviewArticlesPage = () => {
  return (
    <ProtectedAdminRoute>
      <ReviewArticles />
    </ProtectedAdminRoute>
  );
};

export default ReviewArticlesPage;
