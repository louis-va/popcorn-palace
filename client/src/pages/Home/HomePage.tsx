import Container from "@/components/layout/Container"
import Nav from "@/components/layout/Nav"
import Hero from "@/pages/Home/Hero"
import Screenings from "@/pages/Home/Screenings"
import AuthModal from "@/components/auth/AuthModal";
import Footer from "@/components/layout/Footer";

const Home = () => {
  return (
    <>
      <AuthModal />
      <Container>
        <Nav />
        <Hero />
        <Screenings />
        <Footer />
      </Container>
    </>
  )
}

export default Home