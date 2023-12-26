import { IUserData } from '@/auth/types';

export const refresh = async () => {
  try {  
    const options = {
      method: "POST",
      credentials: 'include' as RequestCredentials
    };
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/refresh`, options);
    if (!response.ok) throw new Error('Refresh error');
    const user: IUserData = await response.json();
    return user;
  } catch (error: any) {
    throw new Error(error.message || 'An error occured during auth refresh');
  }
};