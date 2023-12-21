import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="relative w-full max-w-screen-lg m-auto px-4 sm:px-12">
      {children}
    </div>
  );
};

export default Container;