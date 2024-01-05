import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { IScreening, IBooking } from '@/types/types';
import { fetchScreening } from '@/services/screening/fetchScreening.service';
import { getBookingData } from '@/services/booking/getBookingData';
import Container from "@/components/layout/Container";
import Nav from "@/components/layout/Nav";
import AuthModal from "@/components/auth/AuthModal";
import Footer from "@/components/layout/Footer";
import BookingHeader from '@/components/ui/BookingHeader';
import BookingSteps from '@/components/ui/BookingSteps';
import BookingSummary from '@/components/ui/BookingSummary';
import FeedbackMessage from './FeedbackMessage';
import Loading from '@/components/layout/Loading';

const Confirmation = () => {
  const navigate = useNavigate();

  const [screeningData, setScreeningData] = useState<IScreening | null>(null);
  const [bookingData, setBookingData] = useState<IBooking | null>(null);
  const [searchParams] = useSearchParams();

  const bookingId = searchParams.get("bookingid") ? searchParams.get("bookingid") : null;
  const success = searchParams.get("success") ? searchParams.get("success") : null;

  useEffect(() => {
    const fetchScreeningData = async () => {
      if(bookingId){
        try {
          const bookingData = await getBookingData(bookingId);
          setBookingData(bookingData);
        } catch (error: any) {
          navigate('/');
        }
      }
    };
  
    fetchScreeningData();
  }, [bookingId, navigate]);

  useEffect(() => {
    const fetchScreeningData = async () => {
      if(bookingData){
        try {
          const screeningData = await fetchScreening(bookingData.screening_id);
          setScreeningData(screeningData);
        } catch (error: any) {
          navigate('/');
        }
      }
    };
  
    fetchScreeningData();
  }, [bookingData, navigate]);

  if (!screeningData || !bookingId || !bookingData ) return <Loading />;

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
            <FeedbackMessage bookingId={bookingId!} success={success!} />
          </div>

          <div className="col-span-3 order-1 lg:col-span-1 lg:order-2">
            <BookingSteps step={3} />
          </div>

          <div className="col-span-3 order-3 lg:col-span-1 lg:order-3 lg:sticky lg:top-4">
            <BookingSummary
              booking={bookingData!}
              disabled={true}
            />
          </div>
        </div>

        <Footer />
      </Container>
    </>
  )
}

export default Confirmation