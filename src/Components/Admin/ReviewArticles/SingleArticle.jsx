/* eslint-disable react/no-array-index-key */
import React from 'react';
import styles from './reviewArticles.module.scss';
import { CommunityArticle } from '../../Feed/articleComponent';
import { RightTick, AddTag, Cross } from '../../../../public/icons/iconsSVG';
const ReviewArticle = () => {
  return (
    <div className={styles.review}>
      <CommunityArticle />
      <div className={styles['review-options']}>
        <button className={styles['review-button']}>
          <RightTick />
        </button>
        <button className={styles['review-button']}>
          <AddTag />
        </button>
        <button className={styles['review-button']}>
          <Cross />
        </button>
      </div>
    </div>
  );
};

export default ReviewArticle;
