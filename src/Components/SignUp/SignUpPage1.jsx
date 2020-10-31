import PropTypes from 'prop-types';

import React from 'react';

import styles from './signUp.module.scss';

export default function Page1({
  toggleSignUp,
  toggleLogin,
  setTab,
  name,
  password,
  email,
  setName,
  setEmail,
  setPassword,
  nameError,
  emailError,
  passwordError
}) {
  return (
    <div>
      {/** ========================================== Top Row ========================================== */}
      <span>
        By continuing, you agree with our <a>Terms &amp; Conditions </a>.
      </span>
      <div className={styles['top-row']}>
        <div className={styles.left}>
          <button type="button" className={styles.button}>
            <img src="/icons/google.png" alt="" />
            Continue with Google
          </button>
          <button type="button" className={styles.button}>
            <img src="/icons/facebook.png" alt="" />
            Continue with Facebook
          </button>
          <div className={styles.break}>
            <span>OR</span>{' '}
          </div>
          <form className={styles.form}>
            <input
              type="text"
              className={`${styles.input} ${
                nameError !== null ? 'error' : ''
              } `}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            {nameError && <span className="error-message">{nameError}</span>}
            <input
              type="email"
              className={`${styles.input} ${
                emailError !== null ? 'error' : ''
              } `}
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />

            {emailError && <span className="error-message">{emailError}</span>}
            <input
              type="password"
              className={`${styles.input} ${
                passwordError !== null ? 'error' : ''
              } `}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
            {passwordError && (
              <span className="error-message">{passwordError}</span>
            )}
          </form>
        </div>
        <div className={styles.right}>
          <img src="/images/signup1.png" alt="" />
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
  setTab: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  nameError: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
  emailError: PropTypes.string.isRequired
};
