import { useState, ChangeEvent, FormEvent } from "react";
import { useAuth } from "@/auth/useAuth";
import Input from "@/components/forms/Input";
import Form from "../forms/Form";
import Button from "@/components/common/Button";
import { IInputField } from "@/types/types";
import { validateInput, validateEmail, validatePassword } from "@/utils/validation.helpers";

interface IFormData {
  email: IInputField;
  firstname: IInputField;
  lastname: IInputField;
  password: IInputField;
}

const initialFormData: IFormData = {
  email: { value: null, error: null },
  firstname: { value: null, error: null },
  lastname: { value: null, error: null },
  password: { value: null, error: null },
};

const SignUpForm = () => {
  const { setIsAuthModalOpen, handleSignUp } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<IFormData>(initialFormData);

  const isFormValidated =
    formData.email.error === false &&
    formData.firstname.error === false &&
    formData.lastname.error === false &&
    formData.password.error === false;

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldName: keyof IFormData,
    validationFn: (value: string) => boolean,
    errorMessage: string
  ) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [fieldName]: {
        value: value,
        error: validationFn(value) ? false : errorMessage,
      },
    });
  };

  const handleFirstnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, 'firstname', validateInput, 'Veuillez entrer votre prénom.');
  };

  const handleLastnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, 'lastname', validateInput, 'Veuillez entrer votre nom.');
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, 'email', validateEmail, 'Veuillez indiquer une adresse e-mail valide.');
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, 'password', validatePassword, "Votre mot de passe doit comprendre au moins 10 caractères.");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await handleSignUp({
      email: formData.email.value,
      firstname: formData.firstname.value,
      lastname: formData.lastname.value,
      password: formData.password.value,
    });
    setIsLoading(false);
    if (response.ok) {
      setIsAuthModalOpen(false);
    } else {
      setFormData({
        ...formData,
        email: {
          ...formData.email,
          error: "Cet email est déjà utilisé par un utilisateur",
        },
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input 
        label="Prénom"
        type="text"
        name="firstname"
        value={formData.firstname.value}
        error={formData.firstname.error}
        onChange={handleFirstnameChange}
        className="col-span-3"
      />
      <Input 
        label="Nom"
        type="text"
        name="lastname"
        value={formData.lastname.value}
        error={formData.lastname.error}
        onChange={handleLastnameChange}
        className="col-span-3"
      />
      <Input 
        label="Email"
        type="email"
        name="email"
        value={formData.email.value}
        error={formData.email.error}
        autoComplete="new-email"
        onChange={handleEmailChange}
        className="col-span-6"
      />
      <Input 
        label="Mot de passe"
        type="password"
        name="password"
        value={formData.password.value}
        error={formData.password.error}
        autoComplete="new-password"
        onChange={handlePasswordChange}
        className="col-span-6"
      />
      <Button
        type="submit"
        variant="primary"
        disabled={!isFormValidated}
        loading={isLoading}
        className="w-full mt-4 mb-2 col-span-6"
      >
        S'inscrire
      </Button>
    </Form>
  );
};

export default SignUpForm;