import Card from "@/components/common/Card"
import Typography from "@/components/common/Typography"
import Icon from "@/components/common/Icon"
import heroImage from "@/assets/images/popcorn-hero.webp"

const Hero = () => {
  return (
    <section className="grid grid-cols-2 gap-4 mt-8 sm:grid-cols-4 lg:grid-cols-6">
      <Card className="relative flex flex-col justify-end col-span-2 overflow-hidden sm:col-span-4 lg:row-span-2">
        <Typography as="h1" variant="h1" className="mt-32">Popcorn Palace, <br/><span className="text-white/70">cinéma en plain air<br/>situé en plein cœur<br/>de Bruxelles</span></Typography>
        <img 
          src={heroImage}
          alt="Projection d'un film sur le rooftop Popcorn Palace" 
          className="absolute object-cover min-h-full min-w-full -z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
        <div className="absolute w-full h-full -z-10 top-0 left-0 bg-gradient-to-b from-black/20 via-black/20 to-black/100"></div>
      </Card>
      <Card className="flex flex-col gap-4 justify-center items-center text-center backdrop-blur">
        <Icon name="city" className="w-12"></Icon>
        <Typography as="p" variant="h4">Vue sur la ville</Typography>
      </Card>
      <Card className="flex flex-col gap-4 justify-center items-center text-center backdrop-blur">
        <Icon name="film" className="w-12"></Icon>
        <Typography as="p" variant="h4">Films cultes</Typography>
      </Card>
      <Card className="flex flex-col gap-4 justify-center items-center text-center backdrop-blur">
        <Icon name="headphones" className="w-12"></Icon>
        <Typography as="p" variant="h4">Casque personnel</Typography>
      </Card>
      <Card className="flex flex-col gap-4 justify-center items-center text-center backdrop-blur">
        <Icon name="chair" className="w-12"></Icon>
        <Typography as="p" variant="h4">Chaises confortables</Typography>
      </Card>
    </section>
  )
}

export default Hero