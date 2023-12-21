interface ButtonProps {
  type: "primary" | "secondary" | "tertiary"
  size: "small" | "medium" | "round"
  label: string;
  onClick: () => void;
  className?: string;
}

const Button = ({type, size, label, onClick, className }: ButtonProps) => {
  let typeClasses, sizeClasses: string;
  
  switch (type) {
    case "primary":
      typeClasses = "bg-white text-black hover:bg-white/85"
      break;
    case "secondary":
      typeClasses = "bg-white/10 text-white border border-white/10 hover:bg-white/15 hover:border-white/15"
      break;
    case "tertiary":
      typeClasses = "bg-orange text-black hover:bg-orange/90"
      break;
  }

  switch (size) {
    case "small":
      sizeClasses = "text-sm px-4 py-2"
      break;
    case "medium":
      sizeClasses = "text-base px-8 py-4"
      break;
    case "round":
      sizeClasses = "text-lg w-8 h-8 flex justify-center items-center"
      break;
  }

  return (
    <div>
      <button onClick={onClick} className={`font-bold rounded-full active:scale-[.97] ${className} ${typeClasses} ${sizeClasses}`}>
        {label}
      </button>
    </div>
  );
};

export default Button;