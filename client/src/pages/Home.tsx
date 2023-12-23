import Container from "../components/common/Container"
import Nav from "../components/sections/Nav"
import Hero from "../components/sections/Hero"
import Screenings from "../components/sections/Screenings"

const Home = () => {
  return (
    <>
      <Container>
        <Nav />
        <Hero />
        <Screenings />
      </Container>
    </>
  )
}

export default Home