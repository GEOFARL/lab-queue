import validator from 'validator';

const passwordEquals = (password, confirmPassword) => {
  return validator.equals(password, confirmPassword);
};

const isValidName = (name) => {
  // Validate that the name contains only alphabets and spaces
  return validator.isAlphanumeric(name.replace(/\s/g, ''));
};

const isValidEmail = (email) => {
  return validator.isEmail(email);
};

const isValidPassword = (password) => {
  // Validate that the password contains at least 8 characters,
  // including at least one uppercase letter, one lowercase letter, and one number
  return (
    validator.isLength(password, { min: 8 }) &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password)
  );
};

export { passwordEquals, isValidName, isValidEmail, isValidPassword };
