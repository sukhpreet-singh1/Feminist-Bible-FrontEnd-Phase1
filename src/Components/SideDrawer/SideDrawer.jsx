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
        {/** ============================ Logged In User is There ============================ */}

        {User !== null && (
          <div className={styles['user-panel']}>
            {' '}
            <a href="/" onClick={toggleSideDrawer}>
              <img alt="" src="/icons/notification.png" />
              NOTIFICATIONS
            </a>
            <a href="/profile" onClick={toggleSideDrawer}>
              <img alt="" src="/test/user1.png" id={styles['profile-img']} />
              PROFILE
            </a>
            <hr />
          </div>
        )}

        <a href="/" onClick={toggleSideDrawer}>
          <img alt="" src="/icons/home.png" />
          HOME
        </a>

        <a href="/feed" onClick={toggleSideDrawer}>
          <img alt="" src="/icons/book-open.png" />
          FEED
        </a>

        <a href="/" onClick={toggleSideDrawer}>
          <img alt="" src="/icons/write.png" />
          START WRITING
        </a>

        <a href="/" onClick={toggleSideDrawer}>
          <img alt="" src="/icons/drafts.png" />
          DRAFTS
        </a>

        <a
          href="/"
          onClick={toggleSideDrawer}
          style={{ color: '#4a2343', fontWeight: '700' }}>
          <img alt="" src="/icons/heart.png" />
          DONATE
        </a>

        <a href="/" onClick={toggleSideDrawer}>
          <img alt="" src="/icons/alert-circle.png" />
          FAQ
        </a>

        <a href="#about" onClick={toggleSideDrawer}>
          <img alt="" src="/icons/alert-circle.png" />
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

SideDrawer.defaultProps = {
  User: null
};

SideDrawer.propTypes = {
  toggleSideDrawer: PropTypes.func.isRequired,
  toggleLogin: PropTypes.func.isRequired,
  toggleSignUp: PropTypes.func.isRequired,
  User: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
    role: PropTypes.string
  })
};
