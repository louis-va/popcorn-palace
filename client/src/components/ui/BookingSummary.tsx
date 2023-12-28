import { IBooking, ITicket } from '@/types/types';
import Typography from "../common/Typography";
import Button from '../common/Button';

interface BookingSummaryProps {
  booking: IBooking | null;
  buttonLabel?: string;
  buttonAction?: () => void;
}

function validateTickets(tickets: ITicket[]) {
  return tickets.every(ticket =>
    Object.values(ticket).every(value => value !== undefined && value !== null && value !== '')
  );
}

const BookingSummary = ({ booking, buttonLabel, buttonAction }: BookingSummaryProps) => {
  const total = (booking) ? booking.tickets.reduce((sum, ticket) => sum + ticket.price, 0) : 0;
  const isBookingValid = (booking) ? validateTickets(booking.tickets) : false;

  return (
    <section>
      <div className="w-full rounded-lg border bg-white/5 border-white/5 backdrop-blur">
        <div className="border-b border-b-white/5 p-4 sm:p-6">
          <Typography as="h2" variant="h3">Réservation</Typography>
        </div>

        <div className="h-60 p-4 sm:p-6 overflow-y-scroll w-full">
          {(!booking) ? (
            <div className="w-full h-full flex items-center justify-center">
              <Typography as="p" variant="p" className="text-white/30 text-center max-w-52">Veuillez sélectionner vos tickets et vos places</Typography>
            </div>
          ) : (
            <></>
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
      </div>
    </section>
  )
}

export default BookingSummary