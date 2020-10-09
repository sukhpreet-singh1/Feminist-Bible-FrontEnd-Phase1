import React, { useEffect, useState } from 'react';

import Login from '../Login/Login';
import SideDrawer from '../SideDrawer/SideDrawer';
import styles from './header.module.scss';

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  useEffect(() => {
    if (openDrawer === true || loginOpen === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openDrawer, loginOpen]);
  const toggleSideDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div className={styles.container}>
      <div className={styles['left-col']}>
        <img src="/images/full-logo.png" alt="Feminist Bible" />
      </div>

      <div className={styles['right-col']}>
        <button type="button" id={styles.signup} className={styles.button}>
          {' '}
          SIGNUP{' '}
        </button>
        <button
          type="button"
          id={styles.login}
          className={styles.button}
          onClick={() => setLoginOpen(!loginOpen)}>
          {' '}
          LOGIN{' '}
        </button>
        <button
          type="button"
          id={styles.menu}
          className={styles.button}
          onClick={toggleSideDrawer}>
          <img src="/icons/hamburger.svg" alt="Menu" />
        </button>
      </div>
      {openDrawer && <SideDrawer toggleSideDrawer={toggleSideDrawer} />}
      {loginOpen && <Login toggleLogin={() => setLoginOpen(!loginOpen)} />}
    </div>
  );
}
