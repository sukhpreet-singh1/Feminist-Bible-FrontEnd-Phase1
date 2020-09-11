import React from 'react';

import styles from '../../scss/home/welcome.module.scss';

const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles['inner-container']}>
        <div className={styles['left-col']}>
          <img src="../images/logo-white.png" alt="Feminist Bible" />
          <span> MADE FOR ALL BY WOMEN</span>
          <p className={styles.text}>
            Feminist Bible is an inclusive space for all. A place where we
            empathize, acknowledge, and promote diversity by creating an
            inclusive ecosystem powered by shared stories, culturally sensitive
            content, and equity-driven community philosophy.
          </p>
          <span>- Maybelyn Plecic &amp; Rashmeet Kaur</span>
        </div>

        <div className={styles['right-col']}>
          <img src="../images/welcome.png" alt="Welcome " />
          <img src="../images/welcome.png" alt="Welcome " />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
