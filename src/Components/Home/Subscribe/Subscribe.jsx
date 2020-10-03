import React from 'react';

import styles from './subscribe.module.scss';

const Subscribe = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Sign-up for the monthly newsletter</span>
      <div className={styles['right-col']}>
        <input
          type="email"
          className={styles.input}
          placeholder="Email Address"
        />
        <button type="button" className={styles['subscribe-button']}>
          {' '}
          SUBSCRIBE{' '}
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
