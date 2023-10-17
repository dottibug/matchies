import { CustomError } from '@/components/errors/customError';

export const handleUpdatePassword = async (supabase, password) => {
  const { data, error } = await supabase.auth.updateUser({ password: password });

  console.log('-- update password data: ', data);
  console.log('-- update passwrd error: ', error);

  if (error) throw new CustomError('updatePassword', error.message);

  return data;
};
