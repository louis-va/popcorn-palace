import { ChangeEvent } from 'react';
import Typography from '@/components/common/Typography';
import Icon from '@/components/common/Icon';

interface InputProps {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  error?: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({ label, type, name, placeholder, error, onChange, className='' }: InputProps) => {
  let errorMessage: JSX.Element | null = null;
  if (error) {
    errorMessage = <Typography as="p" variant="small" className="text-red flex items-center gap-1"><Icon name="warning" className="w-3 h-3"/> {error}</Typography>
  }

  return (
    <div className={`${className} block mt-6 mb-4`}>
      <label className="block mb-2">
        <Typography as="span" variant="label" className="block pb-3">{label}</Typography>
        <input 
          type={type} 
          name={name} 
          placeholder={placeholder} 
          onChange={onChange} 
          className={`
            w-full bg-white/5 rounded focus:ring focus:ring-orange/40
            ${(error) ? 'border-red/50 hover:border-red/60 focus:border-red/60' : 'border-white/5 hover:border-white/10 focus:border-white/10'}
          `}
        />
      </label>
      <div className={`${(error) ? 'h-4' : 'h-0'} transition-all duration-200`}>
        {errorMessage}
      </div>
    </div>
  );
};

export default Input;
