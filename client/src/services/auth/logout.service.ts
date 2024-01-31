export const logout = async () => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      credentials: 'include' as RequestCredentials,
      headers: headers
    }
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signout`, options)

    if (!response.ok) throw new Error('An error occured during signout');

    return response;
  } catch (error: any) {
    throw new Error(error.message || 'An error occured during signout');
  }
};