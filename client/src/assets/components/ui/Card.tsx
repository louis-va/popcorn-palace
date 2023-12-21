import { ReactNode } from 'react';

interface CardProps {
  size?: "small";
  color?: "blue" | "pink" | "yellow" | "orange";
  children: ReactNode;
  className?: string;
}

const Card = ({ size, color, children, className }: CardProps) => {
  switch (size) {
    case "small":
      className += " rounded p-2 sm:p-3"
      break;
    default:
      className += " rounded-lg p-4 sm:p-6"
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
      break;
  }

  return (
    <div className={`w-full border ${className}`}>
      {children}
    </div>
  );
};

export default Card;