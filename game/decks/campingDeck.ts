import type { Deck } from '../models/Deck';

export const CAMPING_DECK: Deck = {
  id: 2,
  name: 'Camping',
  deckBack: require('../../assets/decks/camping/deckBack.png'),
  cards: [
    {
      id: 1,
      name: 'Axe',
      front: require('../../assets/decks/camping/axe.png'),
    },
    {
      id: 2,
      name: 'Backpack',
      front: require('../../assets/decks/camping/backpack.png'),
    },
    {
      id: 3,
      name: 'Bonfire',
      front: require('../../assets/decks/camping/bonfire.png'),
    },
    {
      id: 4,
      name: 'Caravan',
      front: require('../../assets/decks/camping/caravan.png'),
    },
    {
      id: 5,
      name: 'Cooking',
      front: require('../../assets/decks/camping/cooking.png'),
    },
    {
      id: 6,
      name: 'Cooler',
      front: require('../../assets/decks/camping/cooler.png'),
    },
    {
      id: 7,
      name: 'Lantern',
      front: require('../../assets/decks/camping/lantern.png'),
    },
    {
      id: 8,
      name: 'Map',
      front: require('../../assets/decks/camping/map.png'),
    },
    {
      id: 9,
      name: 'Marshmallows',
      front: require('../../assets/decks/camping/marshmallows.png'),
    },
    {
      id: 10,
      name: 'Picnic Table',
      front: require('../../assets/decks/camping/picnicTable.png'),
    },
    {
      id: 11,
      name: 'Sleeping Bag',
      front: require('../../assets/decks/camping/sleepingBag.png'),
    },
    {
      id: 12,
      name: 'Tent',
      front: require('../../assets/decks/camping/tent.png'),
    },
  ],
};
