import { ReactNode } from 'react';
import Icon from '@/components/common/Icon';

interface ButtonProps {
  type?: "submit" | "reset" | "button";
  variant: "primary" | "secondary" | "tertiary";
  size?: "small" | "round";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const Button = ({ type="button", variant, size, disabled, loading, onClick, children, className='' }: ButtonProps) => {  

  const isDisabled = loading || disabled;

  switch (variant) {
    case "primary":
      className += ` font-semibold text-black ${isDisabled ? 'bg-orange/30 hover:bg-orange/30' : 'bg-orange hover:bg-orange-dark'}`;
      break;
    case "secondary":
      className += ` font-semibold text-black ${isDisabled ? 'bg-white/50 hover:bg-white/50' : 'bg-white hover:bg-white/85'}`;
      break;
    case "tertiary":
      className += ` font-semibold ${isDisabled ? 'bg-white/10 text-white/50 hover:bg-white/10 hover:text-white/50' : 'bg-white/10 text-white hover:bg-white/15'}`;
      break;
  }
  
  switch (size) {
    case "small":
      className += ` text-sm px-4 py-2`;
      break;
    case "round":
      className += ` text-lg w-8 h-8 flex justify-center items-center`;
      break;
    default:
      className += ` text-base px-8 py-3`;
      break;
  }  

  return (
    <button 
      type={type} 
      disabled={isDisabled} 
      onClick={onClick} 
      className={`rounded-full inline-flex justify-center items-center active:scale-[.97] ${className}`}
    >
      {(loading) ? 
        <Icon 
          name='spinner' 
          className={`${(size==='small') ? 'w-5 h-5' : 'w-6 h-6'} animate-spin`}
        /> 
        : children
      }
    </button>
  );
};

export default Button;