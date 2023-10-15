import { selectRandomIcon } from './selectRandomIcon';

export const handleUserProfileCreation = async (
  supabase,
  signUpData,
  username,
  email,
  selectedIcon
) => {
  const { data, error } = await supabase
    .from('profiles')
    .insert([
      {
        user_uid: signUpData.user.id,
        email: email,
        username: username,
        icon: selectedIcon || selectRandomIcon(),
        games_played: 0,
        decks_unlocked: ['ocean', 'camping', 'sweets'],
      },
    ])
    .select();

  if (error) throw new CustomError('supabase', error.message);

  console.log('-- profile data: ', data);
  return data;
};
