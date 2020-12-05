import PropTypes from 'prop-types';

import React, { useContext, useState } from 'react';

import * as auth from '../../services/auth';
import { getProfile } from '../../services/user';
import UserContext from '../Context/UserContext';
import styles from './login.module.scss';

export default function Login({ toggleLogin, toggleSignUp }) {
  {
    /** ================================ User Context ================================ */
  }
  const { setUser } = useContext(UserContext);

  {
    /** ================================ Form Input States ================================ */
  }
  const [email, setEmail] = useState(''); // Email of User
  const [password, setPassword] = useState(''); // Password

  {
    /** ================================ Validation Error States ================================ */
  }

  const [emailError, setEmailError] = useState(null);
  const [loginError, setLoginError] = useState(null);

  const submitLoginForm = async () => {
    try {
      await auth.login(email, password);
      const res = await getProfile();
      const user = res && res.data && res.data.data;
      if (user) {
        setUser({
          email: user.email,
          name: user.name,
          role: user.role,
          id: user._id
        });
      }
      toggleLogin();
    } catch (error) {
      setLoginError(
        error &&
          error.response &&
          error.response.data &&
          error.response.data.message &&
          error.response.data.message
      );
      auth.logout();
    }
  };

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
                type="email"
                placeholder="Email"
                value={email}
                className={`${
                  emailError !== null || loginError !== null ? 'error' : ''
                }`}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                  setEmailError(null);
                  setLoginError(null);
                }}
              />
              {emailError && (
                <span className="error-message">{emailError}</span>
              )}
              <input
                type="password"
                placeholder="Password"
                className={`${loginError !== null ? 'error' : ''}`}
                value={password}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                  setLoginError(null);
                }}
              />
              {loginError && (
                <span className="error-message">{loginError}</span>
              )}
            </form>
          </div>
          <div className={styles.right}>
            <img src="/images/login.png" alt="" />
          </div>
        </div>
        {/** ========================================== Top Row Ends ========================================== */}
        {/** ========================================== Login Button, Forgot Row ========================================== */}
        <div className={styles['bottom-row']}>
          <button
            type="button"
            className={styles['login-button']}
            tabIndex={0}
            onClick={submitLoginForm}>
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
