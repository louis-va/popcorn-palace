import Typography from "@/components/common/Typography"
import Pill from "@/components/common/Pill"
import Icon from "@/components/common/Icon"
import Button from "@/components/common/Button"
import { formatDateToDDMM, formatTimeToHHMM } from "@/utils/date.helpers"

interface BookingHeaderProps {
  title: string;
  date: Date;
  backdrop: string;
  score?: number;
  trailer?: string;
}

interface RatingProps {
  score: number;
}

const Rating = ({ score }: RatingProps) => {
  const roundedScore = Math.round(score);
  const filledStars = Math.floor(roundedScore / 2);
  const halfStars = roundedScore % 2;
  const emptyStars = 5 - filledStars - halfStars;
  const stars = []

  for (let i = 0; i < filledStars; i++) {
    stars.push(<Icon name="star-filled" className="w-3 h-3" />);
  }
  for (let i = 0; i < halfStars; i++) {
    stars.push(<Icon name="star-half" className="w-3 h-3" />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Icon name="star-empty" className="w-3 h-3" />);
  }

  return (
    <div className="flex gap-1 text-orange">
      {stars.map((star, index) => (
        <div key={index}>{star}</div>
      ))}
    </div>
  )
}

const BookingHeader = ({ title, date, backdrop, score, trailer }: BookingHeaderProps) => {
  return (
    <section className="w-full flex flex-col gap-4 justify-end h-[30rem] sm:px-2 md:h-[30rem] md:flex-row md:justify-between md:items-end">
      <div className="absolute top-0 left-0 -z-10 w-full flex justify-center items-center h-[40rem] md:h-[40rem]">
        <img 
          src={backdrop} 
          alt={`Image du film ${title}`} 
          className="object-cover w-full h-full"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/40 via-black/40 to-black/100"></div>
      </div>

      <div>
        {(score) ? (
          <Rating score={score} />
        ): (<></>)}

        <Typography as="h1" variant="h1" className="mt-2 mb-4">{title}</Typography>
        <div className="flex gap-2">
          <Pill type="dark">{formatDateToDDMM(date)}</Pill>
          <Pill type="light" className="backdrop-blur-sm">{formatTimeToHHMM(date)}</Pill>
        </div>
      </div>

      {(trailer) ? (
        <div>
          <Button type="button" variant="tertiary" size="small" className="backdrop-blur-sm">
            <Icon name="play" className="w-4 h-4 mr-2"/>
            Voir le trailer
          </Button>
        </div>
      ): (<></>)}
    </section>
  )
}

export default BookingHeader