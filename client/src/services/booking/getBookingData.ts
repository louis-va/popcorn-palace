import { ITicket } from '@/types/types';

interface ITicketAPI {
  rate: string;
  amount: number;
  price: number;
}

// Transform ITicketAPI[] array to an ITicket[] array
const transformTicketAPIToTicket = (ticketAPIArray: ITicketAPI[]): ITicket[] => {
  const transformedArray = ticketAPIArray.flatMap((item) => {
    const replicatedItems: ITicket[] = [];
    for (let i = 0; i < item.amount; i++) {
      replicatedItems.push({ rate: item.rate, price: item.price });
    }
    return replicatedItems;
  });
  return transformedArray;
};

export const getBookingData = async (bookingId: string) => {
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
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings/${bookingId}`, options);
    const body = await response.json()
    return {...body.booking, tickets: transformTicketAPIToTicket(body.booking.tickets)}
  } catch (error: any) {
    throw new Error(error.message || 'An error occured during checkout');
  }
};