import React from 'react';

import {
  ArticleComponent,
  LeftArticle,
  CommunityArticle
} from './articleComponent';
import styles from './feed.module.scss';

const FeedFinal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>
          <strong style={{ color: '#ab1d79' }}>
            Adventures of Vita &amp; Akira
          </strong>
        </h2>
        <a href="/vita&akira">
          <button type="button">See more &gt;</button>
        </a>
      </div>
      <div className={styles.flex}>
        <LeftArticle />
        <div style={{ width: '100%' }}>
          <ArticleComponent />
          <div style={{ margin: '1rem auto' }}>
            <ArticleComponent />
          </div>
          <ArticleComponent />
        </div>
      </div>
      <div className={styles.heading}>
        <h2>
          <strong style={{ color: '#ab1d79' }}>Real Women Real Stories</strong>
        </h2>
        <a href="/realwomen">
          <button type="button">See more &gt;</button>
        </a>
      </div>
      <div className={styles.flex}>
        <LeftArticle />
        <div style={{ width: '100%' }}>
          <ArticleComponent />
          <div style={{ margin: '1rem auto' }}>
            <ArticleComponent />
          </div>
          <ArticleComponent />
        </div>
      </div>
      <div className={styles.heading}>
        <h2>
          <strong style={{ color: '#ab1d79' }}>
            Badass Women from History
          </strong>
        </h2>
        <a href="/badasswomen">
          <button type="button">See more &gt;</button>
        </a>
      </div>
      <div className={styles.flex}>
        <LeftArticle />
        <div style={{ width: '100%' }}>
          <ArticleComponent />
          <div style={{ margin: '1rem auto' }}>
            <ArticleComponent />
          </div>
          <ArticleComponent />
        </div>
      </div>
      <div className="community" style={{ margin: '3rem auto' }}>
        <h2 style={{ margin: '0 auto 1rem' }}>
          <strong style={{ color: '#ab1d79' }}>Articles</strong>
        </h2>
        <CommunityArticle />
        <CommunityArticle />
        <CommunityArticle />
        <CommunityArticle />
        <CommunityArticle />
      </div>
    </div>
  );
};
export default FeedFinal;
