import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full max-w-screen-xl m-auto px-4 sm:px-12">
      {children}
    </div>
  );
};

export default Container;