import React from 'react';

import styles from './about.module.scss';

const About = () => {
  return (
    <div className={styles.container} id="about">
      <span className={styles.heading}>About Feminist Bible</span>
      <div className={styles['main-content']}>
        <div className={styles['right-col']}>
          <img src="/images/about.png" alt="" />
        </div>

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
            <button
              className={styles['about-buttons']}
              type="button"
              id={styles['learn-more']}>
              Learn More
            </button>
            <a href="/feed">
              <button
                className={styles['about-buttons']}
                type="button"
                id={styles.feed}>
                Go To Feed
              </button>
            </a>
          </span>
        </div>
      </div>
      <div className={styles['quote-div']}>
        <img src="/icons/quote-start.svg" alt='"' />
        <p>
          Every Community has certain rules in place to enhance it&apos;s
          efficiency and also for the convenience of all it&apos;s members. We
          too have a few guidelines for any prospective member of our Feminist
          Bible family! These rules would tell you most of what you would need
          to know about our community before you decide to join us.
        </p>
      </div>
    </div>
  );
};

export default About;
