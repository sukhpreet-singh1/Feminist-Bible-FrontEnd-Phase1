import React from 'react';

import styles from './error.module.scss';

const Error = () => {
  return (
    <div className={styles.container}>
      <div className={styles['inner-container']}>
        <div className={styles.left}>
          <img
            id={styles['error-image']}
            src="/images/error404.svg"
            alt="404"
          />
        </div>
        <div className={styles.right}>
          <h2 className={styles.heading}>404</h2>
          <span className={styles.text}>
            It seems we’re not available right now, don’t worry we’ve still got
            a ton of content for you to enjoy!
          </span>
          <a href="/">
            <button type="button" className={styles.button}>
              Back to Home
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
