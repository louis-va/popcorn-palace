import Typography from "@/components/Typography"
import Card from "@/components/Card"
import Pill from "@/components/Pill"
import { formatDateToDDMM, formatTimeToHHMM } from "@/utils/dateUtils";

interface ScreeningCardProps {
  id: string;
  title: string;
  poster: string;
  date: Date;
  className?: string;
}

const ScreeningCard = ({ id, title, poster, date, className='' }: ScreeningCardProps) => {
  return (
    <a href={`/screenings/${id}`} className={`${className} rounded-lg`}>
      <Card size="small" className="flex flex-col justify-between h-full hover:bg-white/10 hover:border-white/10">
        <img 
          className="w-full rounded"
          src={poster}
          alt={`Affiche du film ${title}`}
        />
        <Typography 
          as="h3" 
          variant="h5"
          className="text-center mt-4"
        >
            {title}
        </Typography>
        <div className="mt-2 flex gap-2 justify-center items-center">
          <Pill type="dark">{formatDateToDDMM(date)}</Pill>
          <Pill type="light">{formatTimeToHHMM(date)}</Pill>
        </div>
      </Card>
    </a>
  )
}

export default ScreeningCard