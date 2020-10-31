import PropTypes from 'prop-types';

import React, { useContext } from 'react';


import { logout } from '../../services/auth';
import UserContext from '../Context/UserContext';
import styles from './sideDrawer.module.scss';

export default function SideDrawer({
  toggleSideDrawer,
  toggleLogin,
  toggleSignUp,
  User
}) {
  const { setUser } = useContext(UserContext);
  return (
    <div className={styles['outer-container']}>
      <div className={styles.container}>
        <span className={styles['button-div']}>
          <button
            type="button"
            className={styles['close-button']}
            onClick={toggleSideDrawer}>
            <img src="/icons/cross.png" alt=" X " />
          </button>
        </span>
        {/* ======================== If no logged In User is there ======================== */}
        {User === null && (
          <div className={styles['auth-buttons-div']}>
            <button
              className={styles.button}
              onClick={() => {
                toggleLogin();
                toggleSideDrawer();
              }}
              type="button">
              Login
            </button>
            <button
              className={styles.button}
              onClick={() => {
                toggleSignUp();
                toggleSideDrawer();
              }}
              type="button">
              Sign Up
            </button>
          </div>
        )}
        {User !== null && (
          <div className={styles['user-panel']}>
            {' '}
            <a href="/" onClick={toggleSideDrawer}>
              <img alt="" src="/icons/notification.png" />
              NOTIFICATIONS
            </a>
            <a href="/" onClick={toggleSideDrawer}>
              <img alt="" src="/test/user1.png" />
              PROFILE
            </a>
            <hr />
          </div>
        )}
        <a href="/" onClick={toggleSideDrawer}>
          HOME
        </a>

        <a href="/feed" onClick={toggleSideDrawer}>
          FEED
        </a>

        <a href="/" onClick={toggleSideDrawer}>
          START WRITING
        </a>

        <a href="/" onClick={toggleSideDrawer}>
          DRAFTS
        </a>

        <a
          href="/"
          onClick={toggleSideDrawer}
          style={{ color: '#4a2343', fontWeight: '600' }}>
          DONATE
        </a>

        <a href="/" onClick={toggleSideDrawer}>
          FAQ
        </a>

        <a href="#about" onClick={toggleSideDrawer}>
          ABOUT US
        </a>

        {/* ======================== If a Logged In User is there ======================== */}
        {User !== null && (
          <button
            onClick={() => {
              logout();
              setUser(null);
              toggleSideDrawer();
            }}
            type="button"
            className={styles.button}
            id={styles.logout}>
            Logout{' '}
          </button>
        )}
      </div>
    </div>
  );
}

SideDrawer.propTypes = {
  toggleSideDrawer: PropTypes.func.isRequired,
  toggleLogin: PropTypes.func.isRequired,
  toggleSignUp: PropTypes.func.isRequired,
  User: PropTypes.object.isRequired
};
