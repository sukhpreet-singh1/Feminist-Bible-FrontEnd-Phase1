import React from 'react';

import styles from './feed.module.scss';

const FeedFinal = () => {
  return (
    <div className={styles.container}>
      <h2>
        <string>Featured</string>
      </h2>
      <div className={styles.featured}>
        <div className={styles.left_side_article}>
          <img src="../images/desktop-feature-img-1.png" alt="" />
          <div>
            <h2>
              <strong>Exploring the depths on the Internet</strong>
            </h2>
            <p>Lorem ipsum sig mundus creatus est.</p>
            <h2>Tiffany Grant</h2>
            <h2>Aug 2, 2020</h2>
          </div>
        </div>
        <div className={styles.right_side_articles}>
          <div className={styles.RS_list}>
            <img src="../images/desktop-feature-img-1.png" alt="" />
            <div>
              <h2>
                <strong>Exploring the depths on the Internet</strong>
              </h2>
              <p>Lorem ipsum sig mundus creatus est.</p>
              <p>Tiffany Grant Aug 2, 2020</p>
            </div>
          </div>
          <div className={styles.RS_list} style={{ margin: '1rem auto' }}>
            <img src="../images/desktop-feature-img-2.png" alt="" />
            <div>
              <h2>
                <strong>Exploring the depths on the Internet</strong>
              </h2>
              <p>Lorem ipsum sig mundus creatus est.</p>
              <p>Tiffany Grant Aug 2, 2020</p>
            </div>
          </div>
          <div className={styles.RS_list}>
            <img src="../images/desktop-feature-img-1.png" alt="" />
            <div>
              <h2>
                <strong>Exploring the depths on the Internet</strong>
              </h2>
              <p>Lorem ipsum sig mundus creatus est.</p>
              <p>Tiffany Grant Aug 2, 2020</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="community"
        style={{ display: 'flex', flexDirection: 'row', margin: '3rem auto' }}>
        <div>
          <h2 style={{ margin: '0 auto 1rem' }}>
            <string>Community</string>
          </h2>
          <div className={styles.LS_community}>
            <img src="../images/desktop-img3.png" alt="" />
            <div>
              <h2>
                <strong>What I learnt from rediscovering my passions</strong>
              </h2>
              <p>
                Lorem ipsum sig mundus creatus est. Lorem ipsum sig mundus
                creatus est.
              </p>
              <p>Tiffany Grant Aug 2, 2020</p>
            </div>
          </div>
          <div className={styles.LS_community}>
            <img src="../images/desktop-img3.png" alt="" />
            <div>
              <h2>
                <strong>What I learnt from rediscovering my passions</strong>
              </h2>
              <p>
                Lorem ipsum sig mundus creatus est. Lorem ipsum sig mundus
                creatus est.
              </p>
              <p>Tiffany Grant Aug 2, 2020</p>
            </div>
          </div>
          <div className={styles.LS_community}>
            <img src="../images/desktop-img3.png" alt="" />
            <div>
              <h2>
                <strong>What I learnt from rediscovering my passions</strong>
              </h2>
              <p>
                Lorem ipsum sig mundus creatus est. Lorem ipsum sig mundus
                creatus est.
              </p>
              <p>Tiffany Grant Aug 2, 2020</p>
            </div>
          </div>
          <div className={styles.LS_community}>
            <img src="../images/desktop-img3.png" alt="" />
            <div>
              <h2>
                <strong>What I learnt from rediscovering my passions</strong>
              </h2>
              <p>
                Lorem ipsum sig mundus creatus est. Lorem ipsum sig mundus
                creatus est.
              </p>
              <p>Tiffany Grant Aug 2, 2020</p>
            </div>
          </div>
          <div className={styles.LS_community}>
            <img src="../images/desktop-img3.png" alt="" />
            <div>
              <h2>
                <strong>What I learnt from rediscovering my passions</strong>
              </h2>
              <p>
                Lorem ipsum sig mundus creatus est. Lorem ipsum sig mundus
                creatus est.
              </p>
              <p>Tiffany Grant Aug 2, 2020</p>
            </div>
          </div>
        </div>
        <div style={{ background: '#FFC7E3', height: '160vh', width: '30%' }}>
          <p>past women</p>
        </div>
      </div>
    </div>
  );
};
export default FeedFinal;
