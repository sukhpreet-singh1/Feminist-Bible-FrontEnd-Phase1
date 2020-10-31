import React from 'react';

import ReportList from '../../src/Components/Admin/ReportList/ReportList';
import Layout from '../../src/Hoc/Layout';
import ProtectedAdminRoute from '../../src/Hoc/ProtectedAdminRoute';

const Reports = () => {
  return (
    <ProtectedAdminRoute>
      <Layout>
        <ReportList />
      </Layout>
    </ProtectedAdminRoute>
  );
};

export default Reports;
