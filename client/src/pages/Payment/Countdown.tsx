import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Card from "@/components/common/Card";
import Typography from "@/components/common/Typography"
import Icon from "@/components/common/Icon";

interface PaymentInfoProps {
  createdDate: Date;
  timoutRedirectUrl: string;
}

const Countdown = ({ createdDate, timoutRedirectUrl }: PaymentInfoProps) => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(15 * 60  * 1000);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const targetTime = new Date(createdDate).getTime() + 15 * 60 * 1000;
      const remainingTime = targetTime - currentTime;

      if (remainingTime <= 0) {
        clearInterval(intervalId); // Clear the interval when countdown finishes
        setCountdown(0);
        navigate(timoutRedirectUrl);
      } else {
        setCountdown(remainingTime);
      }
    }, 1000);

    // Clear interval on unmount to prevent memory leaks
    return () => {
      clearInterval(intervalId);
    };
  }, [createdDate, navigate, timoutRedirectUrl]);

  // Format time to minutes and seconds
  const minutes = Math.floor(countdown / (60 * 1000));
  const seconds = Math.floor((countdown % (60 * 1000)) / 1000);

  // Format minutes and seconds with leading zeros
  const formattedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  
  return (
    <section className="mt-4">
      <Card className="backdrop-blur">
        <div className="flex justify-between items-center">
          <div>
            <Typography as="h2" variant="h3" className="mb-1">Temps restant</Typography>
            <Typography as="p" variant="small" className="text-white-muted">
              Vos sièges sont réservés pendant 15 minutes.
            </Typography>
          </div>
          <div className={`ml-8 w-14 h-8 rounded-sm flex justify-center items-center ${(minutes < 5) ? 'bg-red/15' : 'bg-white/10'}`}>
            <Typography as="p" variant="p" className={(minutes < 5) ? 'text-red' : 'text-white'}>
              {(minutes!=15) ? (
                `${formattedMinutes}:${formattedSeconds}`
              ) : (
                <Icon name='spinner' className='w-5 h-5 animate-spin mb-1 opacity-50'/>
              )}
            </Typography>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default Countdown