import React, { createContext, useState, useEffect } from 'react';
import { ILoginData, IUserData, IAuthContext } from '@/auth/types';
import { login } from '@/auth/loginApi';
import { refresh } from '@/auth/refreshApi';

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserData>();

  useEffect(() => {
    const handleRefresh = async () => {
      try {  
        const user: IUserData = await refresh();
        setUserData(user);
        setIsLoggedIn(true);
      } catch (error: any) {
        setIsLoggedIn(false);
      }
    };

    handleRefresh();
  }, []);

  const handleLogin = async (data: ILoginData) => {
    try {
      const user: IUserData = await login(data);
      setUserData(user);
      setIsLoggedIn(true);
      return true;
    } catch (error: any) {
      return false;
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const authValues: IAuthContext = {
    isLoggedIn,
    isLoginModalOpen,
    setIsLoginModalOpen,
    userData,
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
