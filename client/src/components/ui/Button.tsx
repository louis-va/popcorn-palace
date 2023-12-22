import { ReactNode } from 'react';

interface ButtonProps {
  type: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "round";
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

const Button = ({ type, size, onClick, children, className }: ButtonProps) => {  
  switch (type) {
    case "primary":
      className += " font-bold bg-white text-black hover:bg-white/85"
      break;
    case "secondary":
      className += " font-semibold bg-white/15 text-white hover:bg-white/20"
      break;
    case "tertiary":
      className += " font-bold bg-orange text-black hover:bg-orange/90"
      break;
  }

  switch (size) {
    case "small":
      className += " text-sm px-4 py-2"
      break;
    case "medium":
      className += " text-base px-8 py-4"
      break;
    case "round":
      className += " text-lg w-8 h-8 flex justify-center items-center"
      break;
  }

  return (
    <div>
      <button onClick={onClick} className={`rounded-full ${className}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;