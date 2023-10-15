import { icons } from '@/components/icons/userIcons';

export const selectRandomIcon = () => {
  const randomNum = Math.floor(Math.random() * icons.length);
  return icons[randomNum].name;
};
