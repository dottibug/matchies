import { CustomError } from '@/components/errors/customError';

// REGEX
// Between 8 and 20 chars long, at least one uppercase letter, one number, and one special char
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

export const validatePassword = async (password) => {
  const isValid = passwordRegex.test(password);

  if (!isValid)
    throw new CustomError(
      'password',
      'Must be 8-20 characters, contain at least one number or special character, and have both uppercase and lowercase letters.'
    );

  return true;
};
