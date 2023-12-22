import Typography from "./Typography"
import Card from "./Card"
import Pill from "./Pill"
import { formatDateToDDMM, formatTimeToHHMM } from "../../utils/dateUtils";

interface ScreeningCardProps {
  id: string;
  title: string;
  poster: string;
  date: Date;
  className?: string;
}

const ScreeningCard = ({ id, title, poster, date, className }: ScreeningCardProps) => {
  return (
    <a href={`/screenings/${id}`} className={`${className} rounded`}>
      <Card size="small" clickable={true} className="flex flex-col justify-between h-full">
        <img 
          className="w-full rounded"
          src={poster}
          alt={`Affiche du film ${title}`}
        />
        <Typography 
          className="text-center mt-4"
          tag="h3" 
          variant="h5"
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