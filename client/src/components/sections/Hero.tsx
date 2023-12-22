import Card from "../ui/Card"
import Typography from "../ui/Typography"
import Icon from "../ui/Icon"
import heroImage from "../../assets/images/hero-image.webp"

const Hero = () => {
  return (
    <section className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-4 lg:grid-cols-6">
      <Card className="relative flex flex-col justify-between col-span-2 overflow-hidden sm:col-span-4 lg:row-span-2">
        <Typography tag="h1" variant="h1">Popcorn Palace<br/><span className="text-white/70">Cinéma plain air</span></Typography>
        <Typography tag="p" variant="p" className="mt-28">Une ambiance chaleureuse<br/>sur un rooftop au cœur de<br/>Bruxelles.</Typography>
        <img 
          src={heroImage}
          alt="Projection d'un film sur le rooftop Popcorn Palace" 
          className="absolute object-cover min-h-full min-w-full -z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </Card>
      <Card color="blue" className="flex flex-col gap-4 justify-center items-center text-center">
        <Icon name="headphones" className="w-16"></Icon>
        <Typography tag="p" variant="h4">Casque personnel</Typography>
      </Card>
      <Card color="pink" className="flex flex-col gap-4 justify-center items-center text-center">
        <Icon name="city" className="w-16"></Icon>
        <Typography tag="p" variant="h4">Vue sur la ville</Typography>
      </Card>
      <Card color="yellow" className="flex flex-col gap-4 justify-center items-center text-center">
        <Icon name="film" className="w-16"></Icon>
        <Typography tag="p" variant="h4">Films cultes</Typography>
      </Card>
      <Card color="orange" className="flex flex-col gap-4 justify-center items-center text-center">
        <Icon name="chair" className="w-16"></Icon>
        <Typography tag="p" variant="h4">Chaises confortables</Typography>
      </Card>
    </section>
  )
}

export default Hero