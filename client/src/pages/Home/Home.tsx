import Container from "@/components/Container"
import Nav from "@/components/Nav"
import Hero from "@/pages/Home/Hero"
import Screenings from "@/pages/Home/Screenings"
import LoginModal from "@/auth/LoginModal";

const Home = () => {
  return (
    <>
      <LoginModal />
      <Container>
        <Nav />
        <Hero />
        <Screenings />
      </Container>
    </>
  )
}

export default Home