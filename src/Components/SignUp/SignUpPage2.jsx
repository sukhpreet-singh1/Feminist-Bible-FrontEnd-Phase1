import PropTypes from 'prop-types';

import React from 'react';

import Select from 'react-dropdown-select';

import styles from './signUp.module.scss';

export default function Page2({ setTab }) {
  const options = [
    { id: '0', value: 'Art' },
    { id: '1', value: 'Fiction' },
    { id: '2', value: 'Science' },
    { id: '3', value: 'Technology' },
    { id: '4', value: 'Research' },
    { id: '5', value: 'Martial Arts' }
  ];
  return (
    <div>
      {/** ========================================== Top Row ========================================== */}
      <span>Select at least five of your interests</span>
      <div className={styles['top-row']}>
        <div className={styles.left}>
          <Select
            options={options}
            className={styles['dropdown']}
            onChange={(value) => console.log(value)}
            placeholder="Search"
            addPlaceholder="Search"
            multi
            searchable
            searchBy="value"
            labelField="value"
            valueField="value"
            noDataLabel="No Matches Found !"
            // Content Render
            contentRenderer={({ methods }) => {
              return (
                <div className={styles['content-render']}>
                  <img
                    src="/icons/search2.png"
                    alt=""
                    style={{ marginLeft: '0.5rem', width: '1.5rem' }}
                  />
                  <input
                    type="text"
                    placeholder="Search"
                    onChange={methods.setSearch}
                    className={styles['search-input']}
                  />
                </div>
              );
            }}
            // Item List Render
            itemRenderer={({ item, props, methods }) => (
              <div
                className={styles.item}
                key={item[props.valueField]}
                onClick={() => methods.addItem(item)}>
                <input
                  type="checkbox"
                  onChange={() => console.log('changed')}
                  checked={methods.isSelected(item)}
                />
                &nbsp;&nbsp;&nbsp;{item[props.labelField]}
              </div>
            )}
          />
          <div className={styles.break} style={{ width: '100%' }}>
            <span>OR</span>{' '}
          </div>
          <div className={styles['page2-bottom']}>
            <button
              type="button"
              className={styles['skip-button']}
              tabIndex={0}>
              Skip for now
            </button>
            <button
              type="button"
              className={styles['signup-button']}
              tabIndex={0}>
              SIGN UP
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
          <img src="./images/signup2.png" alt="" />
        </div>
      </div>
      {/** ========================================== Top Row Ends ========================================== */}
    </div>
  );
}

Page2.propTypes = {
  setTab: PropTypes.func.isRequired
};
