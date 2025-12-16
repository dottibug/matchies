import type { ImageSourcePropType } from 'react-native';

// Card model
export interface Card {
  id: number;
  name: string;
  front: ImageSourcePropType;
}
