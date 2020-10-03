import React from 'react';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles['main-content']}>
        <div className={styles['left-col']}>
          <span className={styles.heading}>MP &amp; RK Company</span>
          <div className={styles['text-1']}>
            An Umbrella Company founded by Maybelyn Plecic and Rashmeet Kaur in
            the year 2020. The Company owns two platforms and organizations,
            named &quot;Feminist Bible&quot; and &quot;Women Justice
            League&quot;, which are both run by the two founders.
          </div>
          <div className={styles['text-2']}>
            <img src="../images/Annotation.svg" alt="" />
            <span>
              Copyright 2020 <br />
              MP & RK Company
            </span>
          </div>
        </div>
        <div className={styles['right-col']}>
          <div className={styles['col-1']}>
            <ul>
              <span className={styles.heading}>Navigation</span>
              <li className={styles.list}>Feed</li>
              <li className={styles['list-1']}>About</li>
              <li className={styles['list-1']}>Donate</li>
              <li className={styles['list-1']}>Login</li>
            </ul>
          </div>
          <div className={styles['col-2']}>
            <ul>
              {' '}
              <span className={styles.heading}>Resources</span>
              <li className={styles.list}>Terms &amp; Conditions</li>
              <li className={styles['list-1']}>Privacy Policy</li>
              <li className={styles['list-1']}>News</li>
              <li className={styles['list-1']}>FAQ</li>
              <li className={styles['list-1']}>Sister Platform</li>
            </ul>
          </div>
          <div className={styles['col-3']}>
            <ul>
              {' '}
              <span className={styles.heading}>Connect</span>
              <li className={styles.list}>Facebook</li>
              <li className={styles['list-1']}>Twitter</li>
              <li className={styles['list-1']}>Slack</li>
              <li className={styles['list-1']}>Instagram</li>
              <li className={styles['list-1']}>Linkedin</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles['bottom-text']}>
        Designed and built with love by the GirlScript team with the help of our
        contributors.
      </div>
    </div>
  );
}
