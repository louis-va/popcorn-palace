import React, { createContext, useState, useEffect } from 'react';

interface LoginData {
  email: string;
  password: string;
  remember: boolean;
}

interface UserData {
  id: string | null
  email: string | null;
  firstname: string | null;
  lastname: string | null;
  role: string | null;
}

interface AuthContext {
  isLoggedIn: boolean | null;
  userData: UserData | undefined;
  handleLogin: (data: LoginData) => Promise<boolean>;
  handleLogout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    const refresh = async () => {
      try {  
        const options = {
          method: "POST",
          credentials: 'include' as RequestCredentials
        }
        
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/refresh`, options)
  
        if (!response.ok) return null;
  
        const user: UserData = await response.json();
        setUserData(user);
        setIsLoggedIn(true);
      } catch (error: any) {
        setIsLoggedIn(false);
      }
    };

    refresh();
  }, []);

  const handleLogin = async (data: LoginData) => {
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      const payload = JSON.stringify({
        "email": data.email,
        "password": data.password,
        "remember": data.remember
      });

      const options = {
        method: "POST",
        credentials: 'include' as RequestCredentials,
        headers: headers,
        body: payload
      }

      // Simulating a delay of 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signin`, options)

      if (!response.ok) return false;

      const user: UserData = await response.json();
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

  const authValues: AuthContext = {
    isLoggedIn,
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
