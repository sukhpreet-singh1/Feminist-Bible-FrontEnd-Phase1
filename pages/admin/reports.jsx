import React from 'react';

import ReportList from '../../src/Components/Admin/ReportList/ReportList';
import ProtectedAdminRoute from '../../src/Hoc/ProtectedAdminRoute';

const Reports = () => {
  return (
    <ProtectedAdminRoute>
      <ReportList />
    </ProtectedAdminRoute>
  );
};

export default Reports;
