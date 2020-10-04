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
              <li className={styles.list}><a href="/">Feed</a></li>
              <li className={styles['list-1']}><a href="/">About</a></li>
              <li className={styles['list-1']}><a href="/">Donate</a></li>
              <li className={styles['list-1']}><a href="/">Login</a></li>
            </ul>
          </div>
          <div className={styles['col-2']}>
            <ul>
              {' '}
              <span className={styles.heading}>Resources</span>
              <li className={styles.list}><a href="/">Terms &amp; Conditions</a></li>
              <li className={styles['list-1']}><a href="/">Privacy Policy</a></li>
              <li className={styles['list-1']}><a href="/">News</a></li>
              <li className={styles['list-1']}><a href="/">FAQ</a></li>
              <li className={styles['list-1']}><a href="/">Sister Platform</a></li>
            </ul>
          </div>
          <div className={styles['col-3']}>
            <ul>
              {' '}
              <span className={styles.heading}>Connect</span>
              <li className={styles.list}><a href="/">Facebook</a></li>
              <li className={styles['list-1']}><a href="/">Twitter</a></li>
              <li className={styles['list-1']}><a href="/">Slack</a></li>
              <li className={styles['list-1']}><a href="/">Instagram</a></li>
              <li className={styles['list-1']}><a href="/">Linkedin</a></li>
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
