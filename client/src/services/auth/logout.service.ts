export const logout = async () => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      credentials: 'include' as RequestCredentials,
      headers: headers
    }

    // Simulating a 2 seconds delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signout`, options)

    if (!response.ok) throw new Error('An error occured during signout');

    return response;
  } catch (error: any) {
    throw new Error(error.message || 'An error occured during signout');
  }
};