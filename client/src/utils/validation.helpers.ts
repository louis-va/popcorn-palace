function validateInput(value: string | null): boolean {
  return (value) ? true : false;
}

function validateEmail(email: string): boolean {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password: string): boolean {
  return (password.length > 10);
}

export { validateInput, validateEmail, validatePassword }