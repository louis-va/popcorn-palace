import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IScreening } from '@/types/types';
import { fetchScreening } from '@/services/screening/fetchScreening.service';
import Container from "@/components/layout/Container"
import Nav from "@/components/layout/Nav"
import AuthModal from "@/components/auth/AuthModal";
import Footer from "@/components/layout/Footer";
import Header from '@/pages/Screening/Header';
import AboutMovie from './AboutMovie';

const Screening = () => {
  const { id } = useParams();
  const [screeningData, setScreeningData] = useState<IScreening | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
        <Header screeningData={screeningData} />
        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="col-span-3 lg:col-span-2">
            <AboutMovie screeningData={screeningData} />
          </div>
        </div>
        <Footer />
      </Container>
    </>
  )
}

export default Screening