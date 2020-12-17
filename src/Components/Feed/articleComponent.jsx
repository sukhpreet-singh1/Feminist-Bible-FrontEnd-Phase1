import React from 'react';

import styles from './articleComponent.module.scss';

function ArticleComponent() {
  return (
    <div className={styles.RS_list}>
      <img src="../images/desktop-feature-img-1.png" alt="" />
      <div>
        <h2>
          <strong>Exploring the depths on the Internet</strong>
        </h2>
        <p>Lorem ipsum sig mundus creatus est.</p>
        <p>
          Tiffany Grant Aug 2, 2020
          <span style={{ background: '#B1ED8D' }}>Adventure</span>
          <span style={{ background: '#E9F466' }}>+4</span>
        </p>
      </div>
    </div>
  );
}

function LeftArticle() {
  return (
    <div className={styles.left_side_article}>
      <img src="../images/desktop-feature-img-1.png" alt="" />
      <div>
        <h2>
          <strong>Exploring the depths on the Internet</strong>
        </h2>
        <p>Lorem ipsum sig mundus creatus est.</p>
        <p>
          Tiffany Grant <br />
          Aug 2, 2020
          <span style={{ background: '#ED8D8D' }}>Self help</span>
          <span style={{ background: '#B1ED8D' }}>Productivity</span>
          <span style={{ background: '#E9F466' }}>+3</span>
        </p>
      </div>
    </div>
  );
}

function CommunityArticle() {
  return (
    <div className={styles.LS_community}>
      <img src="../images/desktop-img3.png" alt="" />
      <div>
        <h2>
          <strong>What I learnt from rediscovering my passions</strong>
        </h2>
        <p>
          Lorem ipsum sig mundus creatus est. Lorem ipsum sig mundus creatus
          est.{' '}
        </p>
        <p>Tiffany Grant Aug 2, 2020</p>
        <span style={{ background: '#ED8D8D' }}>Self help</span>
        <span style={{ background: '#B1ED8D' }}>Productivity</span>
        <span style={{ background: '#E9F466' }}>+3</span>
      </div>
    </div>
  );
}
export { ArticleComponent, LeftArticle, CommunityArticle };
