import Container from "@/components/layout/Container"
import Nav from "@/components/layout/Nav"
import Hero from "@/pages/Home/Hero"
import Screenings from "@/pages/Home/Screenings"
import LoginModal from "@/components/auth/LoginModal";

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