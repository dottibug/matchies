import { CustomError } from '@/components/errors/customError';

// REGEX
// At least 4 characters long
const usernameRegex = /.{4,}/;

export const validateUsername = async (username) => {
  const isValid = usernameRegex.test(username);

  if (!isValid)
    throw new CustomError('username', 'Username must be at least 4 characters long.');

  return true;
};
