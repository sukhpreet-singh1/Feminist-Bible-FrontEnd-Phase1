import React, { useContext, useEffect, useState } from 'react';

import UserContext from '../Context/UserContext';

import Login from '../Login/Login';
import SideDrawer from '../SideDrawer/SideDrawer';
import SignUp from '../SignUp/SignUp';
import styles from './header.module.scss';

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const { User } = useContext(UserContext);

  /*
    =========================== Side Drawer , Login, Signup Open. set overflow to hidden ===========================
  */
  useEffect(() => {
    if (openDrawer === true || loginOpen === true || signUpOpen === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openDrawer, loginOpen, signUpOpen]);

  const toggleSideDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div className={styles.container}>
      <div className={styles['left-col']}>
        <img src="/images/full-logo.png" alt="Feminist Bible" />
      </div>

      <div className={styles['right-col']}>
        {/* =================== No User logged In ======================= */}
        {User === null && (
          <>
            <button
              type="button"
              id={styles.signup}
              className={styles.button}
              onClick={() => setSignUpOpen(!signUpOpen)}>
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
          </>
        )}

        {/* =================== User is logged In ======================= */}
        {User !== null && (
          <>
            <button
              type="button"
              className={styles.button}
              id={styles.notification}>
              <img src="/icons/notification.png" alt="Notifications" />
            </button>
            <a href="/profile" title="Profile" style={{ padding: '0' }}>
              <img src="/test/user1.png" id={styles['user-image']} alt="User" />{' '}
            </a>
          </>
        )}
        <button
          type="button"
          id={styles.menu}
          className={styles.button}
          onClick={toggleSideDrawer}>
          <img src="/icons/hamburger.svg" alt="Menu" />
        </button>
      </div>

      {/** ============================= Side Drawer ============================= */}
      {openDrawer && (
        <SideDrawer
          toggleSideDrawer={toggleSideDrawer}
          toggleLogin={() => setLoginOpen(!loginOpen)}
          toggleSignUp={() => setSignUpOpen(!signUpOpen)}
          User={User}
        />
      )}
      {/** ============================= Login PopUp ============================= */}
      {loginOpen && (
        <Login
          toggleLogin={() => setLoginOpen(!loginOpen)}
          toggleSignUp={() => setSignUpOpen(!signUpOpen)}
        />
      )}
      {/** ============================= SignUp PopUp ============================= */}
      {signUpOpen && (
        <SignUp
          toggleSignUp={() => setSignUpOpen(!signUpOpen)}
          toggleLogin={() => setLoginOpen(!loginOpen)}
        />
      )}
    </div>
  );
}
