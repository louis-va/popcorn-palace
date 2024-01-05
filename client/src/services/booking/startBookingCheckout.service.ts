export const startBookingCheckout = async (bookingId: string) => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const payload = JSON.stringify({
      "booking_id": bookingId,
      "success_url": `${import.meta.env.VITE_URL}/payment/confirmation`,
      "cancel_url": `${import.meta.env.VITE_URL}/payment`
    });

    const options = {
      method: "POST",
      credentials: 'include' as RequestCredentials,
      headers: headers,
      body: payload
    }

    // Simulating a 1 seconds delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings/checkout`, options);
    const body = await response.json();
    
    if(response.ok) {
      window.location.href = body.url
    } else {
      window.location.href = `${import.meta.env.VITE_URL}/payment/confirmation?success=false`
    }
  } catch (error: any) {
    throw new Error(error.message || 'An error occured during checkout');
  }
};