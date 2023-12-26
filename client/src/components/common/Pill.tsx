import { ReactNode } from 'react';

interface PillProps {
  type: "dark" | "light";
  children: ReactNode;
  className?: string;
}

const Pill = ({ type, children, className='' }: PillProps) => {  
  switch (type) {
    case "dark":
      className += " bg-black"
      break;
    case "light":
      className += " bg-white/10"
      break;
  }

  return (
    <div className={`text-sm px-3 py-1 rounded-full ${className}`}>
      {children}
    </div>
  );
};

export default Pill;