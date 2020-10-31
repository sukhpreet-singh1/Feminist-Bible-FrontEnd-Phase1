import PropTypes from 'prop-types';

import React, { useContext, useState } from 'react';

import * as auth from '../../services/auth';
import { getProfile } from '../../services/user';
import { validateEmail } from '../../services/validation';
import UserContext from '../Context/UserContext';
import styles from './signUp.module.scss';
import Page1 from './SignUpPage1';
import Page2 from './SignUpPage2';

export default function SignUp({ toggleSignUp, toggleLogin }) {
  {
    /** ================================ User Context ================================ */
  }
  const { setUser } = useContext(UserContext);

  {
    /** ================================ Form Input States ================================ */
  }
  const [name, setName] = useState(''); // Name of User
  const [email, setEmail] = useState(''); // Email of User
  const [password, setPassword] = useState(''); // Password

  {
    /** ================================ Validation Error States ================================ */
  }

  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const [tab, setTab] = useState(0);

  {
    /* ================================ Submit Signup Form ================================ */
  }

  const submitSignUpForm = async () => {
    const validate = validateEmail(email);
    if (validate !== null) {
      setEmailError(validate);
      setTab(0);
      return;
    }

    try {
      await auth.signUp(name, password, email);
      const res = await getProfile();
      console.log(res);
      const user = res && res.data && res.data.data;
      if (user) {
        setUser({
          email: user.email,
          name: user.name,
          role: user.role,
          id: user._id
        });
      }
      toggleSignUp();
    } catch (error) {
      const e =
        error.response && error.response.data && error.response.data.errors;
      if (e.email) setEmailError(e.email);
      if (e.password) setPasswordError(e.password);
      if (e.name) setNameError(e.name);
      auth.logout();
      setTab(0);
    }
  };

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
        {/** ====================== SignUp Page 1 ====================== */}
        {tab === 0 && (
          <Page1
            toggleLogin={toggleLogin}
            toggleSignUp={toggleSignUp}
            setTab={setTab}
            name={name}
            password={password}
            email={email}
            setName={(val) => {
              setName(val);
              setNameError(null);
            }}
            setPassword={(val) => {
              setPassword(val);
              setPasswordError(null);
            }}
            setEmail={(val) => {
              setEmail(val);
              setEmailError(null);
            }}
            nameError={nameError}
            emailError={emailError}
            passwordError={passwordError}
          />
        )}
        {tab === 1 && (
          <Page2 setTab={setTab} submitSignUpForm={submitSignUpForm} />
        )}
      </div>
      {/** ========================================== Container Ends ========================================== */}
    </div>
  );
}

SignUp.propTypes = {
  toggleSignUp: PropTypes.func.isRequired,
  toggleLogin: PropTypes.func.isRequired
};
