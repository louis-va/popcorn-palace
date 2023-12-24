import { ReactNode } from 'react';

type LinkProps = {
  type?: 'button' | 'link';
  href?: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
};

const Link = ({ type='link', href, onClick, className, children }: LinkProps) => {
  
  className += ' inline font-bold text-orange hover:underline'

  if (type === 'link') {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  } else {
    return (
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
    );
  }
};

export default Link;
