import { useState, useEffect } from "react";
import { IScreening, ITicket } from "@/types/types";
import { getTickets } from "@/services/users/getTickets";
import Card from "@/components/common/Card";
import Typography from "@/components/common/Typography";
import Icon from "@/components/common/Icon";
import Pill from "@/components/common/Pill";
import { formatDateToDDMM, formatTimeToHHMM } from "@/utils/date.helpers";

interface IUserTicket {
  seats: string[];
  tickets: ITicket[]
  screening_id: IScreening;
  price: number;
  payment_status: boolean;
  qr_code: string;
}

const TicketHoles = () => {
  return (
    <div className="flex justify-between my-3">
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
      <div className="w-3 h-3 bg-black border border-white/10 rounded-full"></div>
    </div>
  )
}

const Ticket = ({ ticket }: { ticket: IUserTicket }) => {
  return (
    <Card size='medium'>
      <img 
        src={ticket.screening_id.movie.backdrop} 
        alt={`Image du film ${ticket.screening_id.movie.title}`} 
        className="rounded"
      />
      <div className="relative -mt-9 ml-2 flex gap-2 items-center">
        <Pill type="dark">{formatDateToDDMM(new Date(ticket.screening_id.date))}</Pill>
        <Pill type="light" className=" backdrop-blur">{formatTimeToHHMM(new Date(ticket.screening_id.date))}</Pill>
      </div>
      <Typography as='h2' variant='h3' className="mt-6">{ticket.screening_id.movie.title}</Typography>
      <TicketHoles />
      <Typography as='p' variant='p' className="text-white-muted">Nombre de places: <span className="text-white">{ticket.seats.length}</span></Typography>
      <Typography as='p' variant='p' className="text-white-muted">Sièges: <span className="text-white">{ticket.seats.join(', ')}</span></Typography>
      <img 
        src={ticket.qr_code} 
        alt={`QR Code`} 
        className="rounded w-1/2 mt-4"
      />
    </Card>
  )
}

const TicketList = () => {
  const [tickets, setTickets] = useState<IUserTicket[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ticketsData = await getTickets();
        console.log(ticketsData)
        setTickets(ticketsData);
        setLoading(false);
      } catch (error: any) {
        setError(error.message || 'An error occurred');
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  if (loading) return (
    <div className="mt-8">
      <Icon name='spinner' className='w-8 h-8 animate-spin opacity-75'/>
    </div>
  );

  if (!tickets || error) return (
    <div>
      <Typography as='h2' variant='h2'>Vous n'avez pas de tickets.</Typography>
    </div>
  )

  return (
    <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {tickets?.map((ticket, index) => (
        <Ticket key={index} ticket={ticket} />
      ))}
    </section>
  )
}

export default TicketList