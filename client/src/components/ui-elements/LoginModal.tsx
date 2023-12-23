import { useState, ChangeEvent, FormEvent } from "react";
import { useAuth } from "../../utils/useAuth";
import Modal from "../common/Modal";
import Typography from "../common/Typography";
import Input from "../common/Input";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";

interface LoginProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ isOpen, setIsOpen }: LoginProps) => {
  const { handleLogin } = useAuth();

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
    const loginSuccessful = await handleLogin(formData);
    if (loginSuccessful) {
      setIsOpen(false)
    }
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Typography tag="h2" variant="h2" className="pr-8">Connectez-vous à votre compte</Typography>
      
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
        <Button type="submit" variant="primary" className="w-full mt-8">Se connecter</Button>
        <Typography tag="p" variant="small" className="text-white/60 text-center mt-1">
          Vous n’avez pas de compte ? <button className="underline text-orange">S’inscrire</button>
        </Typography>
      </form>
    </Modal>
  );
};

export default Login;