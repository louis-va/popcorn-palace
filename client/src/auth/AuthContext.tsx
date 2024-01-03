import React, { createContext, useState, useEffect } from 'react';
import { ILoginData, IUserData, IAuthContext, ISignUpData } from '@/types/types';
import { login } from '@/services/auth/login.service';
import { refresh } from '@/services/auth/refresh.service';
import { signUp } from '@/services/auth/signup.service';
import { logout } from '@/services/auth/logout.service';

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
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

  const handleSignUp = async (data: ISignUpData) => {
    try {
      const response = await signUp(data);
      return response;
    } catch (error: any) {
      throw new Error("An error occured during signup");
    }
  }

  const handleLogout = async () => {
    try {  
      const response = await logout();
      setUserData(undefined);
      setIsLoggedIn(false);
      return response
    } catch (error: any) {
      setIsLoggedIn(false);
    }
  };

  const authValues: IAuthContext = {
    isLoggedIn,
    isAuthModalOpen,
    setIsAuthModalOpen,
    userData,
    handleLogin,
    handleSignUp,
    handleLogout
  };

  return (
    <AuthContext.Provider value={authValues}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider }
