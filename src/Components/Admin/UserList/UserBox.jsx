import PropTypes from 'prop-types';

import React from 'react';

import styles from './userList.module.scss';

const UserBox = ({ name, src, tag }) => {
  return (
    <div className={styles['userbox-container']}>
      <img src={`/test/${src.toLowerCase()}.png`} alt={name} />
      <h3>{name}</h3>
      <h4>@{tag}</h4>
    </div>
  );
};

UserBox.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired
};

export default UserBox;
