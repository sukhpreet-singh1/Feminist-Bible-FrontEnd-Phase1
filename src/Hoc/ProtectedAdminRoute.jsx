import React, { useContext, useEffect, useState } from 'react';

import UserContext from '../Components/Context/UserContext';

/* eslint-disable-next-line */
function ProtectedRoute({ children }) {
  const { User } = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (User && User.role === 'admin') {
      setIsAdmin(true);
    } else setIsAdmin(false);
  }, [User]);

  if (isAdmin) return <div>{children}</div>;
  return (
      <div>
        {' '}
        Error: 403 Forbidden (This route is only available for specific roles
        only.)
      </div>
    );
}

export default ProtectedRoute;
