import React from 'react';

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
        <a href="/feed1">
          <button type="button">See more &gt;</button>
        </a>
      </div>
      <div className={styles.flex}>
        <div className={styles.left_side_article}>
          <img src="../images/desktop-feature-img-1.png" alt="" />
          <div>
            <h2>
              <strong>Exploring the depths on the Internet</strong>
            </h2>
            <p>Lorem ipsum sig mundus creatus est.</p>
            <p className={styles.h2}>Tiffany Grant Aug 2, 2020</p>
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
      <div className={styles.heading}>
        <h2>
          <strong style={{ color: '#ab1d79' }}>Real Women Real Stories</strong>
        </h2>
        <a href="/feed2">
          <button type="button">See more &gt;</button>
        </a>
      </div>
      <div className={styles.flex}>
        <div className={styles.left_side_article}>
          <img src="../images/desktop-feature-img-1.png" alt="" />
          <div>
            <h2>
              <strong>Exploring the depths on the Internet</strong>
            </h2>
            <p>Lorem ipsum sig mundus creatus est.</p>
            <p className={styles.h2}>Tiffany Grant Aug 2, 2020</p>
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
      <div className={styles.heading}>
        <h2>
          <strong style={{ color: '#ab1d79' }}>
            Badass Women from History
          </strong>
        </h2>
        <a href="/feed3">
          <button type="button">See more &gt;</button>
        </a>
      </div>
      <div className={styles.flex}>
        <div className={styles.left_side_article}>
          <img src="../images/desktop-feature-img-1.png" alt="" />
          <div>
            <h2>
              <strong>Exploring the depths on the Internet</strong>
            </h2>
            <p>Lorem ipsum sig mundus creatus est.</p>
            <p className={styles.h2}>Tiffany Grant Aug 2, 2020</p>
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
      <div className="community" style={{ margin: '3rem auto' }}>
        <h2 style={{ margin: '0 auto 1rem' }}>
          <strong style={{ color: '#ab1d79' }}>Articles</strong>
        </h2>
        <div className={styles.LS_community}>
          <img src="../images/desktop-img3.png" alt="" />
          <div>
            <h2>
              <strong>What I learnt from rediscovering my passions</strong>
            </h2>
            <p>Tiffany Grant Aug 2, 2020</p>
          </div>
        </div>
        <div className={styles.LS_community}>
          <img src="../images/desktop-img3.png" alt="" />
          <div>
            <h2>
              <strong>What I learnt from rediscovering my passions</strong>
            </h2>
            <p>Tiffany Grant Aug 2, 2020</p>
          </div>
        </div>
        <div className={styles.LS_community}>
          <img src="../images/desktop-img3.png" alt="" />
          <div>
            <h2>
              <strong>What I learnt from rediscovering my passions</strong>
            </h2>
            <p>Tiffany Grant Aug 2, 2020</p>
          </div>
        </div>
        <div className={styles.LS_community}>
          <img src="../images/desktop-img3.png" alt="" />
          <div>
            <h2>
              <strong>What I learnt from rediscovering my passions</strong>
            </h2>

            <p>Tiffany Grant Aug 2, 2020</p>
          </div>
        </div>
        <div className={styles.LS_community}>
          <img src="../images/desktop-img3.png" alt="" />
          <div>
            <h2>
              <strong>What I learnt from rediscovering my passions</strong>
            </h2>
            <p>Tiffany Grant Aug 2, 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeedFinal;
