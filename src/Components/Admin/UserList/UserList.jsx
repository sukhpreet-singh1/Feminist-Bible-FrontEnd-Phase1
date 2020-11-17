import React, { useEffect, useState } from 'react';

import { getProfiles } from '../../../services/user';
import UserBox from './UserBox';
import styles from './userList.module.scss';

const UserList = () => {
  const [userList, setUserList] = useState([]); // User List
  const [searchInput, setSearchInput] = useState('');
  /*
      ========================== Function to Call the backend api through services ==========================
  */

  const getUsers = async () => {
    try {
      const res = await getProfiles();
      const lst = res && res.data && res.data.data;
      if (lst) setUserList([...userList, lst].flat());
    } catch (error) {
      setUserList([]);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

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
          {userList.map((user) => {
            return (
              <UserBox
                key={user._id}
                name={user.name}
                tag={user.email.split('@')[0]}
                src={user.img ? user.img : 'user2'}
              />
            );
          })}
          {userList.length === 0 && (
            <div className="error"> No Users to Display </div>
          )}
        </div>
        {/** ============================== User List Display Ends ============================== */}
      </div>
    </div>
  );
};

export default UserList;
