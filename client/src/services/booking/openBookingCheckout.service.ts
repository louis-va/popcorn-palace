import { IBooking, ITicket } from '@/types/types';

interface ITicketAPI {
  rate: string;
  amount: number;
}

// Transform ITicket[] array to an ITicketAPI[] array
const transformTicketArrayForAPI = (ticketArray: ITicket[]) => {
  const transformedArray = ticketArray.reduce((acc: ITicketAPI[], item) => {
    const foundIndex = acc.findIndex((el: ITicketAPI) => el.rate === item.rate);
  
    if (foundIndex !== -1) {
      acc[foundIndex].amount++;
    } else {
      acc.push({ rate: item.rate, amount: 1 });
    }
  
    return acc;
  }, []);
  return transformedArray;
}

export const openBookingCheckout = async (data: IBooking) => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const payload = JSON.stringify({
      "screening_id": data.screening_id,
      "seats": data.seats,
      "tickets": transformTicketArrayForAPI(data.tickets),
      "price": data.tickets.reduce((sum, ticket) => sum + ticket.price, 0),
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
      console.log(body)
      //window.location.href = `${import.meta.env.VITE_URL}/payment/confirmation?success=false`
    }
  } catch (error: any) {
    throw new Error(error.message || 'An error occured during checkout');
  }
};