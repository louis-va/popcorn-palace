import Card from "@/components/common/Card";
import Typography from "@/components/common/Typography"
import Pill from "@/components/common/Pill"

interface AboutMovieProps {
  director: string[];
  casting: string[];
  synopsis: string;
  genres: string[];
}

const AboutMovie = ({ director, casting, synopsis, genres }: AboutMovieProps) => {
  return (
    <section>
      <Card className="backdrop-blur">
        <Typography as="h2" variant="h2" className="mb-6">À propos du film</Typography>
        <Typography as="h3" variant="h3" className="mt-4 mb-2">Réalisateur{(director.length>1) ? 's' : ''}</Typography>
        <Typography as="p" variant="p" className="text-white-muted">{director.join(', ')}</Typography>
        <Typography as="h3" variant="h3" className="mt-4 mb-2">Casting</Typography>
        <Typography as="p" variant="p" className="text-white-muted">{casting.join(', ')}</Typography>
        <Typography as="h3" variant="h3" className="mt-4 mb-2">Synopsis</Typography>
        <Typography as="p" variant="p" className="text-white-muted">{synopsis}</Typography>

        <div className="flex flex-wrap gap-2 mt-6">
          {genres.map((genre, index) => (
            <Pill key={index} type="light">{genre}</Pill>
          ))}
        </div>
      </Card>
    </section>
  )
}

export default AboutMovie