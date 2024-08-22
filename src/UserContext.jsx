import React, { createContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'John Doe', loggedIn: true });

  const login = (name) => {
    setUser({ name, loggedIn: true });
  };

  const logout = () => {
    setUser({ name: '', loggedIn: false });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
