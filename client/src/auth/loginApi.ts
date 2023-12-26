import { ILoginData, IUserData } from '@/auth/types';

export const login = async (data: ILoginData) => {
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

    // Simulating a 2 seconds delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signin`, options)

    if (!response.ok) throw new Error('An error occured during signup');

    const user: IUserData = await response.json();
    return user;
  } catch (error: any) {
    throw new Error(error.message || 'An error occured during signup');
  }
};