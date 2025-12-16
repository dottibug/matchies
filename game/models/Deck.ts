import type { ImageSourcePropType } from 'react-native';
import type { Card } from './Card';

// Deck model
export interface Deck {
  id: number;
  name: string;
  deckBack: ImageSourcePropType;
  cards: Card[];
}
