import { ReactNode } from 'react';

interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  variant: "primary" | "secondary" | "tertiary";
  size?: "small" | "round" | undefined;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const Button = ({ type, variant, size, onClick, children, className }: ButtonProps) => {  
  switch (variant) {
    case "primary":
      className += " font-bold bg-orange text-black hover:bg-orange/90"
      break;
    case "secondary":
      className += " font-bold bg-white text-black hover:bg-white/85"
      break;
    case "tertiary":
      className += " font-semibold bg-white/15 text-white hover:bg-white/20"
      break;
  }

  switch (size) {
    case "small":
      className += " text-sm px-4 py-2"
      break;
    case "round":
      className += " text-lg w-6 h-6 flex justify-center items-center"
      break;
    default:
      className += " text-base px-8 py-3"
      break;
  }

  return (
    <div>
      <button type={type} onClick={onClick} className={`rounded-full flex justify-center items-center ${className}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;