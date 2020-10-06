import React from 'react';

import styles from './welcome.module.scss';

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles['inner-container']}>
        <div className={styles['left-col']}>
          <h1 className={styles.heading}>Feminist Bible</h1>
          <span>&quot;MADE FOR ALL, BY WOMEN&quot;</span>
          <p className={styles.text}>
            Feminist Bible is an inclusive space for all. A place where we
            empathize, acknowledge, and promote diversity by creating an
            inclusive ecosystem powered by shared stories, culturally sensitive
            content, and equity-driven community philosophy.
          </p>
          <span>Maybelyn Plecic &amp; Rashmeet Kaur</span>
        </div>

        <div className={styles['right-col']}>
          <img
            src="../images/welcome.svg"
            alt="Welcome"
            style={{ borderRadius: '5px' }}
          />
        </div>
      </div>
      <a href="/feed">
        <button type="button" className={styles.button}>
          {' '}
          START READING
        </button>
      </a>
    </div>
  );
};

export default Welcome;
