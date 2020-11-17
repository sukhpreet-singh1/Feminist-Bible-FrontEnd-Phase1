import React, { useContext } from 'react';

import UserContext from '../Components/Context/UserContext';

/* eslint-disable-next-line */
function ProtectedUserRoute({ children }) {
  const { User } = useContext(UserContext);

  if (User) return <div>{children}</div>;
  return <div> Error: 403 Forbidden</div>;
}

export default ProtectedUserRoute;
