import PropTypes from 'prop-types';

import React from 'react';
import ArticleList from './ArticleList/ArticleList';
import UserList from './UsersList/UsersList';

export default function BottomComponent({ option }) {
  {
    /** ====================== Get Data for Selected Option ====================== */
  }

  return (
    <div>
      {option === 1 && <ArticleList type="published" />}
      {option === 2 && <ArticleList type="likes" />}
      {option === 3 && <UserList type="following" />}
      {option === 4 && <UserList type="followers" />}
    </div>
  );
}
BottomComponent.propTypes = {
  option: PropTypes.number.isRequired
};
