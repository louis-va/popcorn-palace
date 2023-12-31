import { IBooking, ITicket } from '@/types/types';
import Typography from "../common/Typography";
import Button from '../common/Button';

interface BookingSummaryProps {
  booking: IBooking;
  buttonLabel?: string;
  buttonAction?: () => void;
}

interface BookingSummaryTableRowProps {
  rate: string;
  price: number;
  seat: string | null;
}

function validateTickets(tickets: ITicket[]) {
  return tickets.every(ticket =>
    Object.values(ticket).every(value => value !== undefined && value !== null && value !== '')
  );
}

const BookingSummaryTableHead = () => {
  return (
    <div className='flex justify-between w-full py-2 mb-2 border-b-2 border-b-white/5'>
      <div className='w-2/4'>
        <Typography as="p" variant="small" className="text-white">Ticket</Typography>
      </div>
      <div className='w-1/4 text-right'>
        <Typography as="p" variant="small" className="text-white">Prix</Typography>
      </div>
      <div className='w-1/4 text-right'>
        <Typography as="p" variant="small" className="text-white">Siège</Typography>
      </div>
    </div>
  )
}

const BookingSummaryTableRow = ({ rate, price, seat }: BookingSummaryTableRowProps) => {
  return (
    <div className='flex justify-between w-full py-2 '>
      <div className='w-2/4'>
        <Typography as="p" variant="small" className="text-white-muted">{rate}</Typography>
      </div>
      <div className='w-1/4 text-right'>
        <Typography as="p" variant="small" className="text-white-muted">{price}€</Typography>
      </div>
      <div className='w-1/4 text-right'>
        <Typography as="p" variant="small" className={(seat) ? 'text-white-muted' : 'text-red'}>{(seat) ? seat : '...'}</Typography>
      </div>
    </div>
  )
}

const BookingSummary = ({ booking, buttonLabel, buttonAction }: BookingSummaryProps) => {
  const isBookingEmpty = (booking?.tickets.length == 0)
  const total = (!isBookingEmpty) ? booking.tickets.reduce((sum, ticket) => sum + ticket.price, 0) : 0;
  const isBookingValid = (!isBookingEmpty) && validateTickets(booking.tickets) && booking.tickets.length == booking.seats.length

  return (
    <section className="w-full rounded-lg border bg-white/5 border-white/5 backdrop-blur">
      <div className="border-b border-b-white/5 p-4 sm:p-6">
        <Typography as="h2" variant="h3">Réservation</Typography>
      </div>

      <div className="min-h-40 px-4 py-4 overflow-y-scroll w-full sm:px-6 lg:max-h-[calc(100vh-12.75rem)]">
        {(isBookingEmpty) ? (
          <div className="w-full h-32 flex items-center justify-center">
            <Typography as="p" variant="small" className="text-white/30 text-center max-w-40">Veuillez sélectionner vos tickets et vos places</Typography>
          </div>
        ) : (
          <>
          <BookingSummaryTableHead/>
          {booking.tickets.map((ticket, index) => (
            <BookingSummaryTableRow 
              key={index} 
              rate={ticket.rate} 
              price={ticket.price} 
              seat={(booking.seats.length >= index+1) ? booking.seats[index] : null} 
            />
          ))}
          </>
        )}
      </div>

      <div className="flex justify-between items-center border-t border-t-white/5 p-4 sm:p-6">
        <div>
          <Typography as="h3" variant="small" className="text-white-muted">Total</Typography>
          <Typography as="p" variant="h4">{total}€</Typography>
        </div>
        <div>
          {(buttonLabel) ? (
            <Button 
              type="button" 
              variant="primary" 
              disabled={!isBookingValid}
              onClick={buttonAction}
            >
              {buttonLabel}
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  )
}

export default BookingSummary