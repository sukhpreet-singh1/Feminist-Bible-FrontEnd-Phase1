/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React from 'react';
import { CommunityArticle } from '../../../Feed/articleComponent';
import styles from './articleList.module.scss';

const ArticleList = ({ type }) => {
  return (
    <div className={styles['articles-list-container']}>
      <CommunityArticle />
      <CommunityArticle />
      <CommunityArticle />
      <CommunityArticle />
    </div>
  );
};

ArticleList.propTypes = {
  type: PropTypes.string.isRequired
};

export default ArticleList;
