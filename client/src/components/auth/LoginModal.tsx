import { useState, ChangeEvent, FormEvent } from "react";
import { useAuth } from "./useAuth";
import Modal from "../common/Modal";
import Typography from "../common/Typography";
import Input from "../common/Input";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";
import Link from "../common/Link";

interface LoginProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ isOpen, setIsOpen }: LoginProps) => {
  const { handleLogin } = useAuth();

  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const loginSuccessful = await handleLogin(formData);
    setIsLoading(false);
    if (loginSuccessful) {
      setIsOpen(false)
    }
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Typography as="h2" variant="h2" className="pr-8">Connectez-vous à votre compte</Typography>
      
      <form onSubmit={handleSubmit}>
        <Input 
          label="Email" 
          type="email" 
          name="email" 
          onChange={handleInputChange}
        />
        <Input 
          label="Password" 
          type="password" 
          name="password" 
          onChange={handleInputChange}
        />
        <Checkbox
          label="Se souvenir de moi"
          name="remember"
          onChange={handleInputChange}
        />
        <Button type="submit" variant="primary" loading={isLoading} className="w-full mt-8 mb-2">Se connecter</Button>
        <Typography as="p" variant="small" className="text-center text-white-muted">
          Vous n’avez pas de compte ? <Link type='button' onClick={()=>{console.log('signup')}}>S’inscrire</Link>
        </Typography>
      </form>
    </Modal>
  );
};

export default Login;