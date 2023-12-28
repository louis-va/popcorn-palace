import { ReactNode } from 'react';

interface PillProps {
  type: "dark" | "light";
  size?: "small"
  children: ReactNode;
  className?: string;
}

const Pill = ({ type, size, children, className='' }: PillProps) => {  
  switch (type) {
    case "dark":
      className += " bg-black"
      break;
    case "light":
      className += " bg-white/10"
      break;
  }

  switch (size) {
    case "small":
      className += " text-xs px-2"
      break;
    default:
      className += " text-sm px-3 py-1"
      break;
  }

  return (
    <div className={`inline-flex items-center rounded-full ${className}`}>
      {children}
    </div>
  );
};

export default Pill;