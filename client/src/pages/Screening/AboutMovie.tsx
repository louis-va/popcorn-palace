import Card from "@/components/common/Card";
import Typography from "@/components/common/Typography"
import Pill from "@/components/common/Pill"
import { IScreening } from "@/types/types"

interface AboutMovieProps {
  screeningData: IScreening;
}

const AboutMovie = ({ screeningData }: AboutMovieProps) => {
  return (
    <section>
      <Card className="backdrop-blur">
        <Typography as="h2" variant="h2" className="mb-6">À propos du film</Typography>
        <Typography as="h3" variant="h3" className="mt-4 mb-2">Réalisateur{(screeningData.movie.director.length>1) ? 's' : ''}</Typography>
        <Typography as="p" variant="p" className="text-white-muted">{screeningData.movie.director.join(', ')}</Typography>
        <Typography as="h3" variant="h3" className="mt-4 mb-2">Casting</Typography>
        <Typography as="p" variant="p" className="text-white-muted">{screeningData.movie.casting.join(', ')}</Typography>
        <Typography as="h3" variant="h3" className="mt-4 mb-2">Synopsis</Typography>
        <Typography as="p" variant="p" className="text-white-muted">{screeningData.movie.synopsis}</Typography>

        <div className="flex flex-wrap gap-2 mt-6">
          {screeningData.movie.genres.map((genre, index) => (
            <Pill key={index} type="light">{genre}</Pill>
          ))}
        </div>
      </Card>
    </section>
  )
}

export default AboutMovie