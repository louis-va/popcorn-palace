import { useNavigate } from 'react-router-dom';
import Container from "@/components/layout/Container"
import Nav from "@/components/layout/Nav"
import Footer from "@/components/layout/Footer";
import Typography from "@/components/common/Typography";
import TicketList from './Tickets';
import { useAuth } from "@/auth/useAuth"

const Profile = () => {
  const navigate = useNavigate();
  const { isLoggedIn, userData } = useAuth(); 

  if (!isLoggedIn) navigate('/');
  
  return (
    <>
      <Container>
        <Nav />
          <div className='mt-40 mb-20'>
            <Typography as='h1' variant='h1'>Bonjour {userData?.firstname},</Typography>
            <Typography as='p' variant='h1' className='text-white-muted'>
              retrouvez vos tickets ci-dessous
            </Typography>
          </div>
          <TicketList />
        <Footer />
      </Container>
    </>
  )
}

export default Profile