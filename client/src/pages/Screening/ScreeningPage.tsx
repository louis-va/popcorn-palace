import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IScreening, IBooking, ITicket } from '@/types/types';
import { fetchScreening } from '@/services/screening/fetchScreening.service';
import Container from "@/components/layout/Container"
import Nav from "@/components/layout/Nav"
import AuthModal from "@/components/auth/AuthModal";
import Footer from "@/components/layout/Footer";
import BookingHeader from '@/components/ui/BookingHeader';
import BookingSteps from '@/components/ui/BookingSteps';
import BookingSummary from '@/components/ui/BookingSummary';
import AboutMovie from './AboutMovie';
import TicketSelection from './TicketSelection';

const Screening = () => {
  const { id } = useParams();
  const [screeningData, setScreeningData] = useState<IScreening | null>(null);
  const [bookingData, setBookingData] = useState<IBooking>({
    screening_id: id!,
    tickets: [],
    seats: []
  });
  const [loading, setLoading] = useState<boolean>(true);

  const setTickets = (tickets: ITicket[]) => {
    setBookingData({
      ...bookingData,
      tickets: tickets
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const screeningData = await fetchScreening(id!);
        setScreeningData(screeningData);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
      }
    };
  
    fetchData();
  });

  if (loading || !screeningData) return null;

  return (
    <>
      <AuthModal />
      <Container>
        <Nav />
        <BookingHeader
          title={screeningData.movie.title}
          date={screeningData.date}
          backdrop={screeningData.movie.backdrop}
          score={parseFloat(screeningData.movie.score)}
          trailer={screeningData.movie.trailer}
        />
        
        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="flex flex-col gap-4 col-span-3 order-2 lg:col-span-2 lg:row-span-3 lg:order-1">
            <AboutMovie 
              director={screeningData.movie.director}
              casting={screeningData.movie.casting}
              synopsis={screeningData.movie.synopsis}
              genres={screeningData.movie.genres}
            />
            <TicketSelection tickets={bookingData.tickets} setTickets={setTickets}/>
          </div>

          <div className="col-span-3 order-1 lg:col-span-1 lg:order-2">
            <BookingSteps step={1} />
          </div>

          <div className="col-span-3 order-3 lg:col-span-1 lg:order-3">
            <BookingSummary
              booking={bookingData}
              buttonLabel="Suivant"
              buttonAction={() => {console.log("next")}}
            />
          </div>
        </div>

        <Footer />
      </Container>
    </>
  )
}

export default Screening