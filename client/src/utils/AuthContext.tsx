import React, { createContext, useState } from 'react';

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
  isLoggedIn: boolean;
  userData: UserData | undefined;
  handleLogin: (data: LoginData) => Promise<boolean>;
  handleLogout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData>();

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
        credentials: "same-origin" as RequestCredentials,
        headers: headers,
        body: payload
      }
      
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signin`, options)

      if (!response.ok) return false;

      const user: UserData = await response.json();
      setUserData(user);
      setIsLoggedIn(true);
      return true;
    } catch (error: any) {
      console.error(error.message || 'An error occurred');
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
