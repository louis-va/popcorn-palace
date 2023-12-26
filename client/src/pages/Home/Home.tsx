import Container from "../../components/Container"
import Nav from "../../components/Nav"
import Hero from "./Hero"
import Screenings from "./Screenings"
import LoginModal from "../../auth/LoginModal";

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