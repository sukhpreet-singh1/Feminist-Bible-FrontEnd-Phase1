import React from 'react';

import UserBox from './UserBox';
import styles from './userList.module.scss';

const UserList = () => {
  return (
    <div className={styles.container}>
      <div className={styles['inner-container']}>
        <h1 className={styles.heading}> User List</h1>
        <span className={styles['filters-row']}>
          <button type="button">
            <img src="/icons/filter.png" alt="Filter" />
          </button>
          <button type="button">
            <img src="/icons/search-dark.png" alt="Search" />
          </button>
        </span>
        {/** ============================== User List Display ============================== */}
        <div className={styles['user-list-container']}>
          <UserBox name="abcde abcdefg" tag="abcdefg" src="user2" />
          <UserBox name="Alexa Lorem" tag="alexalorem" src="user1" />
          <UserBox name="Daniel Goss" tag="gossman" src="user2" />
          <UserBox name="Lizzie Aldo" tag="lizzie" src="user1" />
          <UserBox name="Jerny" tag="jerny" src="user2" />
          <UserBox name="User2" tag="User2" src="user2" />
        </div>
        {/** ============================== User List Display Ends ============================== */}
      </div>
    </div>
  );
};

export default UserList;
