import { IBooking } from '@/types/types';

export const createBooking = async (data: IBooking) => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const payload = JSON.stringify({
      "screening_id": data.screening_id,
      "seats": data.seats,
      "tickets": data.tickets,
      "price": data.tickets.reduce((sum, ticket) => sum + ticket.price, 0),
      "success_url": `${import.meta.env.VITE_URL}/payment/confirmation`,
      "cancel_url": `${import.meta.env.VITE_URL}/payment/confirmation`
    });

    const options = {
      method: "POST",
      credentials: 'include' as RequestCredentials,
      headers: headers,
      body: payload
    }

    // Simulating a 1 seconds delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/booking/create`, options);

    return response;
  } catch (error: any) {
    throw new Error(error.message || 'An error occured during checkout');
  }
};