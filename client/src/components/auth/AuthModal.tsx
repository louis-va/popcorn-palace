import { useAuth } from "@/auth/useAuth";
import Tabs from "../common/Tabs";
import Modal from "@/components/common/Modal";
import Typography from "../common/Typography";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const AuthModal = () => {
  const { isAuthModalOpen, setIsAuthModalOpen } = useAuth();

  const LoginContent = (
    <>
      <Typography as="h2" variant="h2" className="pr-8 mb-6">Connectez-vous à votre compte</Typography>
      <LoginForm/>
    </>
  )

  const SignUpContent = (
    <>
      <Typography as="h2" variant="h2" className="pr-8 mb-6">Créez votre compte</Typography>
      <SignUpForm/>
    </>
  )

  return (
    <Modal isOpen={isAuthModalOpen} setIsOpen={setIsAuthModalOpen} className="relative">
      <Tabs className="absolute -top-12 left-0" tabs={[
        {
          title: 'Connexion',
          content: LoginContent
        },
        {
          title: 'Inscription',
          content: SignUpContent
        }
      ]} />
    </Modal>
  );
};

export default AuthModal;