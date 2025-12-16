import type { Deck } from '../models/Deck';

export const VEHICLES_DECK: Deck = {
  id: 11,
  name: 'Vehicles',
  deckBack: require('../../assets/decks/vehicles/deckBack.png'),
  cards: [
    {
      id: 1,
      name: 'Ambulance',
      front: require('../../assets/decks/vehicles/ambulance.png'),
    },
    {
      id: 2,
      name: 'Car',
      front: require('../../assets/decks/vehicles/car.png'),
    },
    {
      id: 3,
      name: 'Fire Truck',
      front: require('../../assets/decks/vehicles/fireTruck.png'),
    },
    {
      id: 4,
      name: 'Jeep',
      front: require('../../assets/decks/vehicles/jeep.png'),
    },
    {
      id: 5,
      name: 'Key',
      front: require('../../assets/decks/vehicles/key.png'),
    },
    {
      id: 6,
      name: 'Motorcycle',
      front: require('../../assets/decks/vehicles/motorcycle.png'),
    },
    {
      id: 7,
      name: 'Pickup Truck',
      front: require('../../assets/decks/vehicles/pickupTruck.png'),
    },
    {
      id: 8,
      name: 'Police Car',
      front: require('../../assets/decks/vehicles/policeCar.png'),
    },
    {
      id: 9,
      name: 'School Bus',
      front: require('../../assets/decks/vehicles/schoolBus.png'),
    },
    {
      id: 10,
      name: 'Taxi',
      front: require('../../assets/decks/vehicles/taxi.png'),
    },
    {
      id: 11,
      name: 'Tires',
      front: require('../../assets/decks/vehicles/tires.png'),
    },
    {
      id: 12,
      name: 'Van',
      front: require('../../assets/decks/vehicles/van.png'),
    },
  ],
};
