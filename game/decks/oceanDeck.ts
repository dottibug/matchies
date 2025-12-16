import type { Deck } from '../models/Deck';

export const OCEAN_DECK: Deck = {
  id: 6,
  name: 'Ocean',
  deckBack: require('../../assets/decks/ocean/deckBack.png'),
  cards: [
    {
      id: 1,
      name: 'Crab',
      front: require('../../assets/decks/ocean/crab.png'),
    },
    {
      id: 2,
      name: 'Dolphin',
      front: require('../../assets/decks/ocean/dolphin.png'),
    },
    {
      id: 3,
      name: 'Fish',
      front: require('../../assets/decks/ocean/fish.png'),
    },
    {
      id: 4,
      name: 'Hermit Crab',
      front: require('../../assets/decks/ocean/hermitCrab.png'),
    },
    {
      id: 5,
      name: 'Jellyfish',
      front: require('../../assets/decks/ocean/jellyfish.png'),
    },
    {
      id: 6,
      name: 'Octopus',
      front: require('../../assets/decks/ocean/octopus.png'),
    },
    {
      id: 7,
      name: 'Oyster',
      front: require('../../assets/decks/ocean/oyster.png'),
    },
    {
      id: 8,
      name: 'Pufferfish',
      front: require('../../assets/decks/ocean/pufferfish.png'),
    },
    {
      id: 9,
      name: 'Seahorse',
      front: require('../../assets/decks/ocean/seahorse.png'),
    },
    {
      id: 10,
      name: 'Sea Turtle',
      front: require('../../assets/decks/ocean/seaTurtle.png'),
    },
    {
      id: 11,
      name: 'Starfish',
      front: require('../../assets/decks/ocean/starfish.png'),
    },
    {
      id: 12,
      name: 'Whale',
      front: require('../../assets/decks/ocean/whale.png'),
    },
  ],
};
