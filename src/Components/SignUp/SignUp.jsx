import PropTypes from 'prop-types';

import React, { useState } from 'react';

import styles from './signUp.module.scss';
import Page1 from './SignUpPage1';
import Page2 from './SignUpPage2';

export default function SignUp({ toggleSignUp, toggleLogin }) {
  const [tab, setTab] = useState(0);
  return (
    <div className={styles['outer-container']}>
      <div className={styles.container}>
        {/** ========================================== Heading Row ========================================== */}
        <div className={styles.heading}>
          <h2>SIGN UP</h2>
          <span className={styles['button-div']}>
            <button
              type="button"
              className={styles['close-button']}
              onClick={toggleSignUp}>
              <img src="/icons/cross.png" alt=" X " />
            </button>
          </span>
        </div>
        {tab === 0 && (
          <Page1
            toggleLogin={toggleLogin}
            toggleSignUp={toggleSignUp}
            setTab={setTab}
          />
        )}
        {tab === 1 && <Page2 setTab={setTab} />}
      </div>
      {/** ========================================== Container Ends ========================================== */}
    </div>
  );
}

SignUp.propTypes = {
  toggleSignUp: PropTypes.func.isRequired,
  toggleLogin: PropTypes.func.isRequired
};
