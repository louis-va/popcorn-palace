import { ChangeEvent } from 'react';
import Typography from './Typography';

interface CheckboxProps {
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Checkbox = ({ label, name, onChange, className }: CheckboxProps) => {
  return (
    <label className={`${className} block my-6 hover:cursor-pointer`}>
      <input 
        type="checkbox"
        name={name} 
        onChange={onChange} 
        className='rounded bg-white/10 border-white/5 text-orange hover:border-white/10 hover:cursor-pointer focus:ring focus:ring-offset-0 focus:ring-orange/50'
      />
      <Typography tag="span" variant="label" className="ml-2">{label}</Typography>
    </label>
  );
};

export default Checkbox;
