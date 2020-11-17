import PropTypes from 'prop-types';

import React, { useEffect, useState } from 'react';

import styles from './signUp.module.scss';

export default function Page2({
  setTab,
  submitSignUpForm,
  selectedTags,
  setSelectedTags
}) {
  // Tag Options or Tag List
  const options = [
    { id: '0', value: 'Art' },
    { id: '1', value: 'Fiction' },
    { id: '2', value: 'Science' },
    { id: '3', value: 'Technology' },
    { id: '4', value: 'Research' },
    { id: '5', value: 'Martial Arts' }
  ];

  const [tagList, setTagList] = useState([]);
  const [signUpDisabled, setSignUpDisabled] = useState(true);

  /* ==================================== Set Available Tag List ==================================== */

  useEffect(() => {
    setTagList(options);
  }, []);

  /* ==================================== Enable / Diable SignUp Button ====================================  */

  useEffect(() => {
    if (selectedTags.length >= 5) setSignUpDisabled(false);
    else setSignUpDisabled(true);
  }, [selectedTags]);

  /* ==================================== Check and set/unset Tag Function ====================================  */

  const checkTag = (value) => {
    const found = selectedTags.indexOf(value);
    if (found !== -1) {
      setSelectedTags([...selectedTags.filter((tag) => tag !== value)]);
    } else {
      setSelectedTags([...selectedTags, value].flat());
    }
  };

  return (
    <div>
      {/** ========================================== Top Row ========================================== */}
      <span>Select at least five of your interests</span>
      <div className={styles['top-row']}>
        <div className={styles.left}>
          <div className={styles['tag-box']}>
            {tagList.map((tag) => {
              return (
                <button
                  type="button"
                  className={`${styles.tag} ${
                    selectedTags.indexOf(tag.value) === -1
                      ? ''
                      : styles['tag-selected']
                  }`}
                  key={tag.value}
                  value={tag.value}
                  onClick={(e) => checkTag(e.currentTarget.value)}>
                  {tag.value}
                </button>
              );
            })}
          </div>
          <div className={styles['page2-bottom']}>
            <button
              type="button"
              className={styles['signup-button']}
              tabIndex={0}
              onClick={submitSignUpForm}
              disabled={signUpDisabled === true}>
              SIGN UP
            </button>
            <button
              type="button"
              className={styles['skip-button']}
              tabIndex={0}
              onClick={submitSignUpForm}>
              Skip for now
            </button>
            <p>
              Want to sign up another way &#63;{' '}
              <button
                type="button"
                onClick={() => {
                  setTab(0);
                }}
                className={styles['anchor-button']}>
                Go Back
              </button>{' '}
              .
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <img src="/images/signup2.png" alt="" />
        </div>
      </div>
      {/** ========================================== Top Row Ends ========================================== */}
    </div>
  );
}

Page2.propTypes = {
  setTab: PropTypes.func.isRequired,
  submitSignUpForm: PropTypes.func.isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedTags: PropTypes.func.isRequired
};
