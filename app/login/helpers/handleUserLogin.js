import { CustomError } from '@/components/errors/customError';

export const handleUserLogin = async (supabase, email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new CustomError('login', error.message);

  return data;
};
