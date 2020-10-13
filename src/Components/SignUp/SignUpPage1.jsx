import PropTypes from 'prop-types';

import React from 'react';

import styles from './signUp.module.scss';

export default function Page1({ toggleSignUp, toggleLogin, setTab }) {
  return (
    <div>
      {/** ========================================== Top Row ========================================== */}
      <span>
        By continuing, you agree with our <a>Terms &amp; Conditions </a>.
      </span>
      <div className={styles['top-row']}>
        <div className={styles.left}>
          <button type="button" className={styles.button}>
            <img src="./icons/google.png" alt="" />
            Continue with Google
          </button>
          <button type="button" className={styles.button}>
            <img src="./icons/facebook.png" alt="" />
            Continue with Facebook
          </button>
          <div className={styles.break}>
            <span>OR</span>{' '}
          </div>
          <form className={styles.form}>
            <input
              type="text"
              className={styles.input}
              placeholder="USERNAME"
            />
            <input
              type="password"
              className={styles.input}
              placeholder="PASSWORD"
            />
            <input type="email" className={styles.input} placeholder="EMAIL" />
          </form>
        </div>
        <div className={styles.right}>
          <img src="./images/signup1.png" alt="" />
        </div>
      </div>
      {/** ========================================== Top Row Ends ========================================== */}
      {/** ========================================== Bottom Row ========================================== */}
      <div className={styles['bottom-row']}>
        <button
          type="button"
          className={styles['continue-button']}
          tabIndex={0}
          onClick={() => setTab(1)}>
          CONTINUE
        </button>
        <p>
          Already a user &#63;{' '}
          <button
            type="button"
            onClick={() => {
              toggleSignUp();
              toggleLogin();
            }}
            className={styles['anchor-button']}>
            Log in
          </button>
          .
        </p>
      </div>
      {/** ========================================== Bottom row Ends ========================================== */}
    </div>
  );
}

Page1.propTypes = {
  toggleSignUp: PropTypes.func.isRequired,
  toggleLogin: PropTypes.func.isRequired,
  setTab: PropTypes.func.isRequired
};
