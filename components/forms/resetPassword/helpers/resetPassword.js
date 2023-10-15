import { CustomError } from '@/components/errors/customError';

export const resetPassword = async (supabase, email) => {
  // 1. if (email) show modal pre-populated with the email address already given
  // 2. if (!email), show modal with form for email input and reset password button

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://localhost:3000/reset-password',
  });

  console.log('-- reset error: ', error);
  if (error) throw new CustomError('resetPassword', error.message);

  console.log('-- reset data: ', data);
  return data;
};
