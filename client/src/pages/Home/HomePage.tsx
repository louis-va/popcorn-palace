import Container from "@/components/layout/Container"
import Nav from "@/components/layout/Nav"
import Hero from "@/pages/Home/Hero"
import ScreeningGrid from "@/pages/Home/ScreeningGrid"
import AuthModal from "@/components/auth/AuthModal";
import Footer from "@/components/layout/Footer";

const Home = () => {
  return (
    <>
      <AuthModal />
      <Container>
        <Nav />
        <Hero />
        <ScreeningGrid />
        <Footer />
      </Container>
    </>
  )
}

export default Home