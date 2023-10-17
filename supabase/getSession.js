import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export const getClientSession = async () => {
  const supabase = createClientComponentClient();

  const { data, error } = await supabase.auth.getSession();

  const { session } = data;
  return { session, error };
};
