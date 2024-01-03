import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IScreening, IBooking } from '@/types/types';
import { fetchScreening } from '@/services/screening/fetchScreening.service';
import Container from "@/components/layout/Container"
import Nav from "@/components/layout/Nav"
import AuthModal from "@/components/auth/AuthModal";
import Footer from "@/components/layout/Footer";
import BookingHeader from '@/components/ui/BookingHeader';
import BookingSteps from '@/components/ui/BookingSteps';
import BookingSummary from '@/components/ui/BookingSummary';

const Screening = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(true);
  const [screeningData, setScreeningData] = useState<IScreening | null>(null);
  
  const bookingDataString: string | null = localStorage.getItem('bookingData');
  let bookingData: IBooking

  if (bookingDataString !== null) {
    bookingData = JSON.parse(bookingDataString);
  } else {
    navigate('/');
  }

  useEffect(() => {
    const fetchScreeningData = async () => {
      try {
        const screeningData = await fetchScreening(bookingData.screening_id);
        setScreeningData(screeningData);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
      }
    };
  
    fetchScreeningData();
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
        />
        
        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="flex flex-col gap-4 col-span-3 order-2 lg:col-span-2 lg:row-span-3 lg:order-1">
            
          </div>

          <div className="col-span-3 order-1 lg:col-span-1 lg:order-2">
            <BookingSteps step={2} />
          </div>

          <div className="col-span-3 order-3 lg:col-span-1 lg:order-3 lg:sticky lg:top-4">
            <BookingSummary
              booking={bookingData!}
              buttonLabel="Payer"
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