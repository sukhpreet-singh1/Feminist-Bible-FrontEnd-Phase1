import React from 'react';

import styles from '../../scss/home/about.module.scss';

const About = () => {
  return (
    <div className={styles.container}>
      <span className={styles.heading}>
        About Feminist Bible
        <img src="../images/h1.png" alt="" />
      </span>
      <div className={styles['main-content']}>
        <div className={styles['left-col']}>
          <p className={styles['text-1']}>
            Are you ready to share your story, participate in this positive and
            impactful movement, and be change-makers&#63;
            <br /> Are you ready to embark on a memorable, purposeful,
            inspirational, and fulfilling journey&#63;
            <br />
            Come on, join Maybelyn Plecic, Rashmeet Kaur, and the Feminist Bible
            team!
            <br />
            What do we do&#63;
          </p>
          <ul className={styles['text-2']}>
            <li>We create a sense of belonging for all. </li>
            <li>
              We promote awareness by sharing the unheard voices from
              underrepresented and diverse people.
            </li>
            <li>
              We spread kindness, positivity, hope, curiosity, and fun in
              people&apos;s lives.
            </li>
          </ul>
          <span>
            <button className={styles['about-buttons']} type="button">
              Learn More
            </button>

            <button className={styles['about-buttons']} type="button">
              Go To Feed
            </button>
          </span>
        </div>
        <div className={styles['right-col']}>
          <img src="../images/about.png" alt="" />
          <img src="../images/about-mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
