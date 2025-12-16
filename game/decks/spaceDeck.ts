import type { Deck } from '../models/Deck';

export const SPACE_DECK: Deck = {
  id: 7,
  name: 'Space',
  deckBack: require('../../assets/decks/space/deckBack.png'),
  cards: [
    {
      id: 1,
      name: 'Asteroid',
      front: require('../../assets/decks/space/asteroid.png'),
    },
    {
      id: 2,
      name: 'Astronaut',
      front: require('../../assets/decks/space/astronaut.png'),
    },
    {
      id: 3,
      name: 'Comet',
      front: require('../../assets/decks/space/comet.png'),
    },
    {
      id: 4,
      name: 'Earth',
      front: require('../../assets/decks/space/earth.png'),
    },
    {
      id: 5,
      name: 'Mercury',
      front: require('../../assets/decks/space/mercury.png'),
    },
    {
      id: 6,
      name: 'Moon',
      front: require('../../assets/decks/space/moon.png'),
    },
    {
      id: 7,
      name: 'Planet',
      front: require('../../assets/decks/space/planet.png'),
    },
    {
      id: 8,
      name: 'Rocket',
      front: require('../../assets/decks/space/rocket.png'),
    },
    {
      id: 9,
      name: 'Saturn',
      front: require('../../assets/decks/space/saturn.png'),
    },
    {
      id: 10,
      name: 'Stars',
      front: require('../../assets/decks/space/stars.png'),
    },
    {
      id: 11,
      name: 'Sun',
      front: require('../../assets/decks/space/sun.png'),
    },
    {
      id: 12,
      name: 'Venus',
      front: require('../../assets/decks/space/venus.png'),
    },
  ],
};
