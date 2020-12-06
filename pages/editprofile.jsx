import React from 'react';

// import EditProfile from '../src/Components/Profile/Edit/EditProfile';
import ProtectedUserRoute from '../src/Hoc/ProtectedUserRoute';

const Edit = () => {
  return <ProtectedUserRoute>{/* <EditProfile /> */}</ProtectedUserRoute>;
};

export default Edit;
