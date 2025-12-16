import type { Deck } from '../models/Deck';

export const DINOSAURS_DECK: Deck = {
  id: 4,
  name: 'Dinosaurs',
  deckBack: require('../../assets/decks/dinosaurs/deckBack.png'),
  cards: [
    {
      id: 1,
      name: 'Bones',
      front: require('../../assets/decks/dinosaurs/bones.png'),
    },
    {
      id: 2,
      name: 'Brontosaurus',
      front: require('../../assets/decks/dinosaurs/brontosaurus.png'),
    },
    {
      id: 3,
      name: 'Dino Costume',
      front: require('../../assets/decks/dinosaurs/dinoCostume.png'),
    },
    {
      id: 4,
      name: 'Diplodocus',
      front: require('../../assets/decks/dinosaurs/diplodocus.png'),
    },
    {
      id: 5,
      name: 'Egg',
      front: require('../../assets/decks/dinosaurs/egg.png'),
    },
    {
      id: 6,
      name: 'Footprint',
      front: require('../../assets/decks/dinosaurs/footprint.png'),
    },
    {
      id: 7,
      name: 'Parasaurolophus',
      front: require('../../assets/decks/dinosaurs/parasaurolophus.png'),
    },
    {
      id: 8,
      name: 'Pterosaurus',
      front: require('../../assets/decks/dinosaurs/pterosaurus.png'),
    },
    {
      id: 9,
      name: 'Stegosaurus',
      front: require('../../assets/decks/dinosaurs/stegosaurus.png'),
    },
    {
      id: 10,
      name: 'Trex',
      front: require('../../assets/decks/dinosaurs/trex.png'),
    },
    {
      id: 11,
      name: 'Triceratops',
      front: require('../../assets/decks/dinosaurs/triceratops.png'),
    },
    {
      id: 12,
      name: 'Volcano',
      front: require('../../assets/decks/dinosaurs/volcano.png'),
    },
  ],
};
