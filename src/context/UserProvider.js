import React, { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
