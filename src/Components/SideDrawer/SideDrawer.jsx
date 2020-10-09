import PropTypes from 'prop-types';

import React from 'react';

import styles from './sideDrawer.module.scss';

export default function SideDrawer({ toggleSideDrawer }) {
  return (
    <div className={styles['outer-container']}>
      <div className={styles.container}>
        <span className={styles['button-div']}>
          <button
            type="button"
            className={styles['close-button']}
            onClick={toggleSideDrawer}>
            <img src="/icons/hamburger.svg" alt="Menu" />
          </button>
        </span>
        <a href="/" onClick={toggleSideDrawer}>
          HOME
        </a>

        <a href="/" onClick={toggleSideDrawer}>
          NOTIFICATIONS
        </a>

        <a href="/" onClick={toggleSideDrawer}>
          USER PROFILE
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
      </div>
    </div>
  );
}

SideDrawer.propTypes = {
  toggleSideDrawer: PropTypes.func.isRequired
};
