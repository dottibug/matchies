import { CustomError } from '@/components/errors/customError';

export const resetPassword = async (supabase, email) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://localhost:3000/reset-password',
  });

  console.log('-- reset error: ', error);
  if (error) throw new CustomError('resetPassword', error.message);

  console.log('-- reset data: ', data);
  return data;
};
