import { supabase } from './supabaseClient';
import { icons } from '../icons/userIcons';
import { CustomError } from '../errors/customError';

// HELPERS
function selectRandomIcon() {
  const randomNum = Math.floor(Math.random() * icons.length);
  return icons[randomNum].name;
}

// REGEX
// At least 4 characters long
const usernameRegex = /.{4,}/;
// Between 8 and 20 chars long, at least one uppercase letter, one number, and one special char
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

// TODO can delete .select() from profile data OR maybe keep it so you can update app state with the current session user profile instead of doing another api call for user's profile page

export const createUserAccount = async (username, email, password, userIcon) => {
  const validUsername = usernameRegex.test(username);
  const validPassword = passwordRegex.test(password);

  if (!validUsername)
    throw new CustomError('username', 'Username must be at least 4 characters long.');

  if (!validPassword)
    throw new CustomError(
      'password',
      'Must be 8-20 characters, contain at least one number or special character, and have both uppercase and lowercase letters.'
    );

  if (validUsername && validPassword) {
    try {
      // Supabase sign up auth
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (!signUpError) {
        // Supabase insert user profile
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              user_uid: signUpData.user.id,
              email: email,
              username: username,
              icon: userIcon || selectRandomIcon(),
              games_played: 0,
              decks_unlocked: ['ocean', 'camping', 'sweets'],
            },
          ])
          .select();

        if (profileData) console.log('-- SIGN UP SUCCESSFUL --- DO STUFF');

        if (profileError) throw new CustomError('supabase', profileError.message);
      }
      if (signUpError) throw new CustomError('supabase', signUpError.message);
    } catch (error) {
      throw new CustomError(error.type, error.message);
    }
  }
};
