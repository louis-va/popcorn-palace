import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from "@/components/layout/Container"
import Nav from "@/components/layout/Nav"
import AuthModal from "@/components/auth/AuthModal";
import Footer from "@/components/layout/Footer";
import { IScreening } from '@/types/types';
import { fetchScreening } from '@/services/screening/fetchScreening.service';

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
          <p>Movie: {screeningData.movie.title}</p>
        <Footer />
      </Container>
    </>
  )
}

export default Screening