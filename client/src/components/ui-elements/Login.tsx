import { useAuth } from "../../utils/useAuth";
import Modal from "../common/Modal";
import Typography from "../common/Typography";
import Button from "../common/Button";

interface LoginProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ isOpen, setIsOpen }: LoginProps) => {
  const { handleLogin } = useAuth();

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Typography tag="h2" variant="h3">Connectez-vous à votre compte</Typography>
      <Button type="secondary" size="small" onClick={()=>{handleLogin()}}> Connexion </Button>
    </Modal>
  );
};

export default Login;