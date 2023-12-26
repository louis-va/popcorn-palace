export interface ILoginData {
  email: string;
  password: string;
  remember: boolean;
}

export interface IUserData {
  id: string | null
  email: string | null;
  firstname: string | null;
  lastname: string | null;
  role: string | null;
}

export interface IAuthContext {
  isLoggedIn: boolean | null;
  userData: IUserData | undefined;
  isLoginModalOpen: boolean,
  setIsLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  handleLogin: (data: ILoginData) => Promise<boolean>;
  handleLogout: () => void;
}