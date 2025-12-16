import type { Deck } from '../models/Deck';

export const SPOOKY_DECK: Deck = {
  id: 8,
  name: 'Spooky',
  deckBack: require('../../assets/decks/spooky/deckBack.png'),
  cards: [
    {
      id: 1,
      name: 'Black Cat',
      front: require('../../assets/decks/spooky/blackCat.png'),
    },
    {
      id: 2,
      name: 'Cauldron',
      front: require('../../assets/decks/spooky/cauldron.png'),
    },
    {
      id: 3,
      name: 'Death',
      front: require('../../assets/decks/spooky/death.png'),
    },
    {
      id: 4,
      name: 'Flying Broom',
      front: require('../../assets/decks/spooky/flyingBroom.png'),
    },
    {
      id: 5,
      name: 'Garland',
      front: require('../../assets/decks/spooky/garland.png'),
    },
    {
      id: 6,
      name: 'Ghost',
      front: require('../../assets/decks/spooky/ghost.png'),
    },
    {
      id: 7,
      name: 'Haunted House',
      front: require('../../assets/decks/spooky/hauntedHouse.png'),
    },
    {
      id: 8,
      name: 'Moon',
      front: require('../../assets/decks/spooky/moon.png'),
    },
    {
      id: 9,
      name: 'Potion',
      front: require('../../assets/decks/spooky/potion.png'),
    },
    {
      id: 10,
      name: 'Pumpkin',
      front: require('../../assets/decks/spooky/pumpkin.png'),
    },
    {
      id: 11,
      name: 'Spider',
      front: require('../../assets/decks/spooky/spider.png'),
    },
    {
      id: 12,
      name: 'Witch Hat',
      front: require('../../assets/decks/spooky/witchHat.png'),
    },
  ],
};
