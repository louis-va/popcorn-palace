import { ReactNode } from "react";

interface FormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  children: ReactNode;
  className?: string;
}

const Form = ({ onSubmit, children, className }: FormProps) => {
  return (
    <form noValidate onSubmit={onSubmit} className={`${className} grid grid-cols-6 gap-4`}>
      {children}
    </form>
  );
};

export default Form;