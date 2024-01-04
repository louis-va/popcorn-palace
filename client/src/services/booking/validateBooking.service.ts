export const validateBooking = async (bookingId: string, stripeSessionId: string) => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const payload = JSON.stringify({
      "booking_id": bookingId,
      "session_id": stripeSessionId
    });

    const options = {
      method: "POST",
      credentials: 'include' as RequestCredentials,
      headers: headers,
      body: payload
    }

    // Simulating a 1 seconds delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/booking/validate`, options);

    return response;
  } catch (error: any) {
    throw new Error(error.message || 'An error occured during checkout');
  }
};