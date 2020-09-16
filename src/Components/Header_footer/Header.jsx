import React, { useState } from 'react';

import styles from '../../scss/header_footer/header.module.scss';
import SideDrawer from './SideDrawer';

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleSideDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

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
        <a className={`${styles.link} ${styles.feedLink}`} href="/">
          FEED
        </a>
        <a className={styles.link} href="/">
          LOGIN
        </a>
        <a className={styles.link} href="/">
          SIGNUP
        </a>
        <button
          type="button"
          className={styles['drawer-button']}
          onClick={toggleSideDrawer}>
          <img src="../icons/hamburger.png" alt="Open Menu" />
        </button>
      </div>

      {openDrawer && <SideDrawer />}
    </div>
  );
}
