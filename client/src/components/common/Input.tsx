import { ChangeEvent } from 'react';
import Typography from './Typography';

interface InputProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({ label, type, name, placeholder, onChange, className }: InputProps) => {
  return (
    <label className={`${className} block my-6`}>
      <Typography as="span" variant="label" className="block pb-3">{label}</Typography>
      <input 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        onChange={onChange} 
        className='w-full bg-white/5 border-white/5 rounded hover:border-white/10 focus:border-white/10 focus:ring focus:ring-orange/50'
      />
    </label>
  );
};

export default Input;
