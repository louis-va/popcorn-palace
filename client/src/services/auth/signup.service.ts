import { ISignUpData } from '@/types/types';

export const signUp = async (data: ISignUpData) => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const payload = JSON.stringify({
      "email": data.email,
      "firstname": data.firstname,
      "lastname": data.lastname,
      "password": data.password
    });

    const options = {
      method: "POST",
      credentials: 'include' as RequestCredentials,
      headers: headers,
      body: payload
    }
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, options);

    return response;
  } catch (error: any) {
    throw new Error(error.message || 'An error occured during signup');
  }
};