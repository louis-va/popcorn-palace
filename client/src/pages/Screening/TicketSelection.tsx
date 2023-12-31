import { ITicket } from '@/types/types';
import Card from "@/components/common/Card";
import Typography from "@/components/common/Typography"
import Button from '@/components/common/Button';

const ticketRates = [
  {
    rate: "Normal",
    description: "Tarif de base sans réduction.",
    price: 8
  },
  {
    rate: "Étudiant",
    description: "Disponible pour les possesseurs d’une carte étudiant valide",
    price: 6
  },
  {
    rate: "Réduit",
    description: "Pour les enfants de moins de 16 ans et les personnes de plus de 65 ans.",
    price: 5
  }
]

interface TicketSelectionProps {
  tickets: ITicket[];
  setTickets: (tickets: ITicket[]) => void;
}

interface RateCardProps {
  rate: string;
  description: string;
  price: number;
  number: number;
  increase: () => void;
  decrease: () => void;
}

const RateCard = ({ rate, description, price, number, increase, decrease }: RateCardProps) => {
  return (
    <div className="flex justify-between py-4 gap-8 border-t border-t-white/5">
      <div>
        <div className="flex gap-2 mb-1">
          <Typography as="h3" variant="h4">{rate} <span className='text-white-muted ml-2'>{price}€</span></Typography>
        </div>
        <Typography as="p" variant="small" className="text-white/60">{description}</Typography>
      </div>

      <div className="flex gap-1 items-center">
        <Button type="button" variant="tertiary" size="round" onClick={decrease}>-</Button>
        <Typography as="p" variant="h2" className="text-white w-8 text-center">{number}</Typography>
        <Button type="button" variant="tertiary" size="round" onClick={increase}>+</Button>
      </div>
    </div>
  )
}

const TicketSelection = ({ tickets, setTickets }: TicketSelectionProps) => {
  const addTicket = (rate: string, price: number) => {
    if (tickets.length >= 10) return;
    setTickets([
      ...tickets,
      {
        rate: rate,
        price: price
      }
    ])
  }

  const removeTicket = (rate: string) => {
    const indexToRemove = tickets.findIndex(ticket => ticket.rate === rate);
    if (indexToRemove !== -1) {
      const updatedTickets = [...tickets.slice(0, indexToRemove), ...tickets.slice(indexToRemove + 1)];
      setTickets(updatedTickets);
    }
  }

  const countRateOccurrences = (rate: string) => {
    return tickets.reduce((count, ticket) => {
      if (ticket.rate === rate) {
        return count + 1;
      }
      return count;
    }, 0);
  };  
  
  return (
    <section>
      <Card>
        <Typography as="h2" variant="h2" className='mb-2'>Tickets</Typography>
        <Typography as="p" variant="p" className='text-white-muted mb-4'>Sélectionnez vos tickets <span className="text-xs">(max. 10)</span></Typography>
        {ticketRates.map((ticketRate, index) => (
          <RateCard 
            key={index}
            rate={ticketRate.rate}
            description={ticketRate.description}
            price={ticketRate.price}
            number={countRateOccurrences(ticketRate.rate)}
            increase={() => addTicket(ticketRate.rate, ticketRate.price)}
            decrease={() => removeTicket(ticketRate.rate)}
          />
        ))}
      </Card>
    </section>
  )
}

export default TicketSelection