import { ReactNode } from 'react';

interface CardProps {
  size?: "small" | "medium";
  color?: "blue" | "pink" | "yellow" | "orange";
  children: ReactNode;
  className?: string;
}

const Card = ({ size, color, children, className='' }: CardProps) => {
  switch (size) {
    case "small":
      className += " px-2 py-3 rounded sm:px-3 sm:py-3"
      break;
    case "medium":
      className += " p-2 sm:p-3 rounded-lg"
      break;
    default:
      className += " p-4 sm:p-6 rounded-lg"
      break;
  }

  switch (color) {
    case "blue":
      className += " bg-[#B2E3FF]/10 border-[#B2E3FF]/5 text-[#B2E3FF]"
      break;
    case "pink":
      className += " bg-[#FDB2FF]/10 border-[#FDB2FF]/5 text-[#FDB2FF]"
      break;
    case "yellow":
      className += " bg-[#FFE9B2]/10 border-[#FFE9B2]/5 text-[#FFE9B2]"
      break;
    case "orange":
      className += " bg-[#FFC0B2]/10 border-[#FFC0B2]/5 text-[#FFC0B2]"
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