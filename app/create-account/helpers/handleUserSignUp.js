import { CustomError } from '@/components/errors/customError';

export const handleUserSignUp = async (supabase, email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new CustomError('supabase', error.message);

  return data;
};
