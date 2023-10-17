import { CustomError } from '@/components/errors/customError';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export const getUsername = async (sessionUserId) => {
  const supabase = createClientComponentClient();

  const {
    data: [{ username }],
    error,
  } = await supabase.from('profiles').select('username').eq('user_uid', sessionUserId);

  // TODO handle error
  if (error) console.log('There was an error retrieving the username from supabase');

  return username;
};
