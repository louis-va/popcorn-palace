import { ReactNode } from 'react';

interface CardProps {
  size?: "small";
  color?: "blue" | "pink" | "yellow" | "orange";
  clickable?: boolean;
  children: ReactNode;
  className?: string;
}

const Card = ({ size, color, clickable, children, className }: CardProps) => {
  switch (size) {
    case "small":
      className += " p-2 sm:p-3"
      break;
    default:
      className += " p-4 sm:p-6"
      break;
  }

  switch (color) {
    case "blue":
      className += " bg-blueLight/5 border-blueLight/5 text-blueLight"
      break;
    case "pink":
      className += " bg-pinkLight/5 border-pinkLight/5 text-pinkLight"
      break;
    case "yellow":
      className += " bg-yellowLight/5 border-yellowLight/5 text-yellowLight"
      break;
    case "orange":
      className += " bg-orangeLight/5 border-orangeLight/5 text-orangeLight"
      break;
    default:
      className += " bg-white/5 border-white/5"
      if (clickable) className += " hover:bg-white/10 hover:border-white/10"
      break;
  }

  return (
    <div className={`w-full rounded-lg border ${className}`}>
      {children}
    </div>
  );
};

export default Card;