export const checkBookingStatus = async (bookingId: string) => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options = {
      method: "GET",
      credentials: 'include' as RequestCredentials,
      headers: headers
    }

    // Simulating a 1 seconds delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings/status/${bookingId}`, options);

    return response;
  } catch (error: any) {
    throw new Error(error.message || 'An error occured during checkout');
  }
};