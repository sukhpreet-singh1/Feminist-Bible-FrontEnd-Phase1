import PropTypes from 'prop-types';

import React from 'react';

import styles from './login.module.scss';

export default function Login({ toggleLogin, toggleSignUp }) {
  return (
    <div className={styles['outer-container']}>
      <div className={styles.container}>
        {/** ========================================== Heading Row ========================================== */}
        <div className={styles.heading}>
          <h2>LOG IN</h2>
          <span className={styles['button-div']}>
            <button
              type="button"
              className={styles['close-button']}
              onClick={toggleLogin}>
              <img src="/icons/cross.png" alt=" X " />
            </button>
          </span>
        </div>
        {/** ========================================== Heading Row Ends ========================================== */}
        {/** ========================================== Top Row ========================================== */}
        <span>
          By continuing to move forward you agree to our{' '}
          <a> Privacy Policy. </a>
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
              <input type="text" placeholder="USERNAME" />
              <input type="password" placeholder="PASSWORD" />
            </form>
          </div>
          <div className={styles.right}>
            <img src="./images/login.png" alt="" />
          </div>
        </div>
        {/** ========================================== Top Row Ends ========================================== */}
        {/** ========================================== Login Button, Forgot Row ========================================== */}
        <div className={styles['bottom-row']}>
          <button type="button" className={styles['login-button']} tabIndex={0}>
            LOGIN
          </button>
          <p>
            Forgot your <a>Username</a> or <a>Password</a> ? New to Feminist
            Bible?{' '}
            <button
              type="button"
              onClick={() => {
                toggleSignUp();
                toggleLogin();
              }}
              className={styles['anchor-button']}>
              Sign Up
            </button>
          </p>
        </div>
        {/** ========================================== Login Button, Forgot Row Ends ========================================== */}
      </div>
      {/** ========================================== Container Ends ========================================== */}
    </div>
  );
}

Login.propTypes = {
  toggleLogin: PropTypes.func.isRequired,
  toggleSignUp: PropTypes.func.isRequired
};
