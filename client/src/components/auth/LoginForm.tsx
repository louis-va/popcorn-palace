import { useState, ChangeEvent, FormEvent } from "react";
import { useAuth } from "@/auth/useAuth";
import Form from "../forms/Form";
import Input from "@/components/forms/Input";
import Checkbox from "@/components/forms/Checkbox";
import Button from "@/components/common/Button";
import { IInputField, ICheckbox } from "@/types/types";
import { validateInput, validateEmail } from "@/utils/validation.helpers";

interface IFormData {
  email: IInputField;
  password: IInputField;
  remember: ICheckbox;
}

const initialFormData: IFormData = {
  email: { value: null, error: null },
  password: { value: null, error: null },
  remember: { value: false, error: false}
};

const LoginForm = () => {
  const { setIsAuthModalOpen, handleLogin } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<IFormData>(initialFormData);

  const isFormValidated =
    formData.email.error === false &&
    formData.password.error === false &&
    formData.remember.error === false;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldName: keyof IFormData,
    validationFn: (value: string) => boolean,
    errorMessage: string
  ) => {
    const { value } = e.target;
    setFormData({...formData, [fieldName]: {
      value: value,
      error: validationFn(value) ? false : errorMessage,
    }});
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({...formData, [name]: {
      value: checked,
      error: false,
    }});
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, 'email', validateEmail, 'Veuillez indiquer une adresse e-mail valide.');
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, 'password', validateInput, "Veuillez entrer votre mot de passe.");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const loginSuccessful = await handleLogin({
      email: formData.email.value,
      password: formData.password.value,
      remember: formData.remember.value
    });
    setIsLoading(false);
    if (loginSuccessful) {
      setIsAuthModalOpen(false)
    } else {
      setFormData({
        ...formData,
        email: {
          ...formData.email,
          error: "Email ou mot de passe incorrect.",
        },
        password: {
          ...formData.password,
          error: "Email ou mot de passe incorrect.",
        }
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input 
        label="Email"
        type="email"
        name="email"
        value={formData.email.value}
        error={formData.email.error}
        onChange={handleEmailChange}
        className="col-span-6"
      />
      <Input 
        label="Password"
        type="password"
        name="password"
        value={formData.password.value}
        error={formData.password.error}
        onChange={handlePasswordChange}
        className="col-span-6"
      />
      <Checkbox
        label="Se souvenir de moi"
        name="remember"
        onChange={handleCheckboxChange}
        className="col-span-6"
      />
      <Button 
        type="submit" 
        variant="primary" 
        disabled={!isFormValidated}
        loading={isLoading} 
        className="w-full mt-4 mb-2 col-span-6"
      >
        Se connecter
      </Button>
    </Form>
  );
};

export default LoginForm;