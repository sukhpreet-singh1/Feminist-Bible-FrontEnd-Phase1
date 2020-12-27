import React, { useEffect, useState } from 'react';

import UserBox from './UserBox';
import styles from './usersList.module.scss';

const UserList = ({ type }) => {
  const [userList, setUserList] = useState([]); // User List
  /*
      ========================== Function to Call the backend api through services ==========================
  */

  return (
    <div>
      <div className={styles['user-list-container']}>
        {userList.map((user) => {
          return (
            <UserBox
              key={user._id}
              name={user.name}
              tag={user.username && user.username}
              src={user.img ? user.img : 'user2'}
            />
          );
        })}
      </div>
      {userList.length === 0 && (
        <div className="error-message"> No {type} to display. </div>
      )}
    </div>
  );
};

export default UserList;
