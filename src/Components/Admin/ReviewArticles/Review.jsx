/* eslint-disable react/no-array-index-key */
import React from 'react';
import ReviewArticle from './SingleArticle';
import styles from './reviewArticles.module.scss';

const ReviewArticles = () => {
  return (
    <div className={styles.container}>
      <div className={styles['inner-container']}>
        <h1 className={styles.heading}>Review Articles</h1>
        <span className={styles['filters-row']}>
          <button type="button">
            {' '}
            <img src="/icons/filter.png" alt="Filter" />
          </button>
          <button type="button">
            <img src="/icons/search-dark.png" alt="Search" />
          </button>
        </span>
        {/** ============================== Articles List Display ============================== */}
        <div className={styles['articles-list-container']}>
          <ReviewArticle />
          <ReviewArticle />
          <ReviewArticle />
          <ReviewArticle />
        </div>
        {/** ============================== Reports Display Ends ============================== */}
      </div>
    </div>
  );
};

export default ReviewArticles;
