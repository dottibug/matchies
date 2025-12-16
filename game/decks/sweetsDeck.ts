import type { Deck } from '../models/Deck';

export const SWEETS_DECK: Deck = {
  id: 9,
  name: 'Sweets',
  deckBack: require('../../assets/decks/sweets/deckBack.png'),
  cards: [
    {
      id: 1,
      name: 'Apple Pie',
      front: require('../../assets/decks/sweets/applePie.png'),
    },
    {
      id: 2,
      name: 'Chocolate',
      front: require('../../assets/decks/sweets/chocolate.png'),
    },
    {
      id: 3,
      name: 'Cookie',
      front: require('../../assets/decks/sweets/cookie.png'),
    },
    {
      id: 4,
      name: 'Cotton Candy',
      front: require('../../assets/decks/sweets/cottonCandy.png'),
    },
    {
      id: 5,
      name: 'Croissant',
      front: require('../../assets/decks/sweets/croissant.png'),
    },
    {
      id: 6,
      name: 'Cupcake',
      front: require('../../assets/decks/sweets/cupcake.png'),
    },
    {
      id: 7,
      name: 'Donut',
      front: require('../../assets/decks/sweets/donut.png'),
    },
    {
      id: 8,
      name: 'Frozen Yogurt',
      front: require('../../assets/decks/sweets/frozenYogurt.png'),
    },
    {
      id: 9,
      name: 'Gummy Bear',
      front: require('../../assets/decks/sweets/gummyBear.png'),
    },
    {
      id: 10,
      name: 'Ice Cream',
      front: require('../../assets/decks/sweets/iceCream.png'),
    },
    {
      id: 11,
      name: 'Milkshake',
      front: require('../../assets/decks/sweets/milkshake.png'),
    },
    {
      id: 12,
      name: 'Popsicle',
      front: require('../../assets/decks/sweets/popsicle.png'),
    },
  ],
};
