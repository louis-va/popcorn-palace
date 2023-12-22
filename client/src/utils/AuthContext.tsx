import React, { createContext, useState } from 'react';

interface AuthContext {
  isLoggedIn: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here...
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here...
    setIsLoggedIn(false);
  };

  const authValues: AuthContext = {
    isLoggedIn,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={authValues}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider }
