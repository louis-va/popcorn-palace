import { ReactNode } from 'react';

interface CardProps {
  size?: "small" | "medium";
  children: ReactNode;
  className?: string;
}

const Card = ({ size, children, className='' }: CardProps) => {
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

  return (
    <div className={`bg-white/5 border-white/5 w-full border ${className}`}>
      {children}
    </div>
  );
};

export default Card;