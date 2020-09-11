import React from 'react';

import styles from '../../scss/header_footer/header.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles['left-col']}>
        <img className={styles.logo} src="../images/full-logo.png" alt="Logo" />

        {/* Search Bar */}
        <span className={styles.search}>
          <input className={styles.input} placeholder="Search" />
          <img src="../icons/search.png" alt="Search" />
        </span>
      </div>

      <div className={styles['right-col']}>
        <a className={styles.link} href="/">
          FEED
        </a>
        <a className={styles.link} href="/">
          LOGIN
        </a>
        <a className={styles.link} href="/">
          SIGNUP
        </a>
      </div>
    </div>
  );
}
