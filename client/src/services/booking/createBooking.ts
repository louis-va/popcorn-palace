import { IBooking, ITicket } from '@/types/types';

interface ITicketAPI {
  rate: string;
  amount: number;
  price: number;
}

// Transform ITicket[] array to an ITicketAPI[] array
const transformTicketToTicketAPI = (ticketArray: ITicket[]) => {
  const transformedArray = ticketArray.reduce((acc: ITicketAPI[], item) => {
    const foundIndex = acc.findIndex((el: ITicketAPI) => el.rate === item.rate);
  
    if (foundIndex !== -1) {
      acc[foundIndex].amount++;
    } else {
      acc.push({ rate: item.rate, amount: 1, price: item.price});
    }
  
    return acc;
  }, []);
  return transformedArray;
}

export const createBooking = async (data: IBooking) => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const payload = JSON.stringify({
      "screening_id": data.screening_id,
      "seats": data.seats,
      "tickets": transformTicketToTicketAPI(data.tickets),
      "price": data.tickets.reduce((sum, ticket) => sum + ticket.price, 0)
    });

    const options = {
      method: "POST",
      credentials: 'include' as RequestCredentials,
      headers: headers,
      body: payload
    }
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings/create`, options);
    const body = await response.json();

    if(response.ok) {
      return body.booking_id
    } else {
      throw new Error('An error occured during booking creation');
    } 

  } catch (error: any) {
    throw new Error(error.message || 'An error occured during booking creation');
  }
};