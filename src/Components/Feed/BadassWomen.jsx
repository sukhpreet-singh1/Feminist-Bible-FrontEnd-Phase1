import React from 'react';

import {
  ArticleComponent,
  LeftArticle,
  CommunityArticle
} from './articleComponent';
import styles from './feed.module.scss';

const BadassWomen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading} style={{ flexFlow: 'wrap-reverse' }}>
        <h2 style={{ fontSize: '20px' }}>
          <strong style={{ color: '#ab1d79' }}>
            Badass Women From History
          </strong>
        </h2>
        <button id={styles.search} type="button">
          <img src="/icons/search2.png" alt="" />
          <span>
            <input
              style={{ border: 'none' }}
              type="text"
              placeholder="SEARCH"
            />
          </span>
        </button>
      </div>
      <div className={styles.quote}>
        <img src="/icons/quote-start.svg" alt='"' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
          pharetra nibh quam mauris eget lobortis ut sed eu. Ipsum odio urna
          etiam nisi. Nulla sodales felis, vitae nullam. Praesent enim magna eu,
          volutpat lacus.
        </p>
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
      </div>
    </div>
  );
};
export default BadassWomen;
