import React from 'react';

import styles from './meet.module.scss';

const Meet = () => {
  return (
    <div className={styles.container}>
      <span className={styles.heading}>Meet Maybelyn &amp; Rashmeet</span>
      <div className={styles['main-content']}>
        <div className={styles['col-1']}>
          <img src="../images/image4.svg" alt="" />
        </div>
        <div className={styles['col-2']}>
          Maybelyn Plecic and Rashmeet Kaur are the founders of the Feminist
          Bible. It began in January 2020, where they decided to co-write a book
          to share real women&apos;s stories. In time, they realized that there
          were not enough repositories online that could easily share famous
          women role models from various fields. For many years, they both
          learned that most stories are from the male population. They both
          agreed it was time for the other half of the missing women&apos;s
          stories to share successes, struggles, inspirations, and journeys.
        </div>
        <div className={styles['col-3']}>
          <img src="../images/image3.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Meet;
