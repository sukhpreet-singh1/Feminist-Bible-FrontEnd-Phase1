import React from 'react';

import ArticleEditor from '../src/Components/ArticleEditor/editor';
import Layout from '../src/Hoc/Layout';

const Editor = () => {
  return (
    <Layout>
      <ArticleEditor />
    </Layout>
  );
};

export default Editor;
