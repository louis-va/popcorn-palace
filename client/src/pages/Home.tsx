import Container from "../components/common/Container"
import Nav from "../components/sections/Nav"
import Hero from "../components/sections/Hero"
import Screenings from "../components/sections/Screenings"
import LoginModal from "../auth/LoginModal";

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