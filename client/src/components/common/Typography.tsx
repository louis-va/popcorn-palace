import { ReactNode } from 'react';

interface TypographyProps {
  as: keyof JSX.IntrinsicElements;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "small" | "label";
  children: ReactNode;
  className?: string;
}

const Typography = ({ as, variant, children, className='' }: TypographyProps) => {
  const Tag = as

  switch (variant) {
    case "h1":
      className += " text-4xl font-bold leading-tight"
      break;
    case "h2":
      className += " text-2xl font-bold leading-tight"
      break;
    case "h3":
      className += " text-xl font-bold leading-tight"
      break;
    case "h4":
      className += " text-lg font-bold leading-tight"
      break;
    case "h5":
      className += " text-base font-bold leading-tight"
      break;
    case "p":
      className += " text-base font-normal leading-normal"
      break;
    case "small":
      className += " text-xs font-normal leading-normal"
      break;
    case "label":
      className += " text-sm font-medium leading-none"
      break;
  }

  return (
    <Tag className={`${className}`}>
      {children}
    </Tag>
  );
};

export default Typography;