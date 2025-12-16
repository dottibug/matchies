import type { Deck } from '../models/Deck';

export const CONSTRUCTION_DECK: Deck = {
  id: 3,
  name: 'Construction',
  deckBack: require('../../assets/decks/construction/deckBack.png'),
  cards: [
    {
      id: 1,
      name: 'Barrier',
      front: require('../../assets/decks/construction/barrier.png'),
    },
    {
      id: 2,
      name: 'Bulldozer',
      front: require('../../assets/decks/construction/bulldozer.png'),
    },
    {
      id: 3,
      name: 'Cone',
      front: require('../../assets/decks/construction/cone.png'),
    },
    {
      id: 4,
      name: 'Crane',
      front: require('../../assets/decks/construction/crane.png'),
    },
    {
      id: 5,
      name: 'Dump Truck',
      front: require('../../assets/decks/construction/dumpTruck.png'),
    },
    {
      id: 6,
      name: 'Hammer Truck',
      front: require('../../assets/decks/construction/hammerTruck.png'),
    },
    {
      id: 7,
      name: 'Hard Hat',
      front: require('../../assets/decks/construction/hardHat.png'),
    },
    {
      id: 8,
      name: 'House Build',
      front: require('../../assets/decks/construction/houseBuild.png'),
    },
    {
      id: 9,
      name: 'Jackhammer',
      front: require('../../assets/decks/construction/jackhammer.png'),
    },
    {
      id: 10,
      name: 'Log Truck',
      front: require('../../assets/decks/construction/logTruck.png'),
    },
    {
      id: 11,
      name: 'Mixer Truck',
      front: require('../../assets/decks/construction/mixerTruck.png'),
    },
    {
      id: 12,
      name: 'Wrecking Ball',
      front: require('../../assets/decks/construction/wreckingBall.png'),
    },
  ],
};
