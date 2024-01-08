export const getTickets = async () => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options = {
      method: "GET",
      credentials: 'include' as RequestCredentials,
      headers: headers
    }

    const response = await fetch(`${import.meta.env.VITE_API_URL}/users/tickets`, options);
    if (!response.ok) throw new Error('Failed to fetch data');
    const tickets = await response.json();
    return tickets;
  } catch (error: any) {
    throw new Error(error.message || 'An error occurred');
  }
};