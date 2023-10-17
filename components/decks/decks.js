// Webpack require.context: create a context to require all images from specific folder instead of manually importing each one

// Images must be named in the following format: themeName-imageName.png
const cardFaceImages = require.context('./images', true);
const cardFaceImagePaths = cardFaceImages.keys().map((image) => image);

const cardBackImages = require.context('./cardBacks', false);
const cardBackImagePaths = cardBackImages.keys().map((cardBack) => cardBack);

// CARD FACES
// Create card objects {theme, name, imagePath, imageAlt}
const cardFaces = cardFaceImagePaths.map((path, i) => {
  const theme = path.split('/')[1];
  const name = path.match(/-([^-]*)\./)[1];
  const imagePath = cardFaceImages(path).default.src;

  // Add a space before every uppercase character and convert to lowercase
  const imageAlt = name.replace(/([A-Z])/g, ' $1').toLowerCase();

  return { theme, name, imagePath, imageAlt };
});

// Group card faces by theme
const cardFacesByTheme = cardFaces.reduce((acc, card) => {
  const { theme, name, imagePath, imageAlt } = card;
  // Find the theme in acc array that === card.theme
  const currentTheme = acc.find((a) => a.theme === card.theme);

  // If currentTheme is FOUND in acc array, add card to that theme's 'cards' array
  if (currentTheme) {
    currentTheme.cards = [...currentTheme.cards, { name, imagePath, imageAlt }];
    return acc;
  }
  // If currentTheme is NOT found in acc array, add new entry to the acc array
  else return [...acc, { theme, cards: [{ name, imagePath, imageAlt }] }];
}, []);

// CARD BACKS
const cardBacks = cardBackImagePaths.map((path, i) => {
  const match = path.match(/\.\/(.*)\.png/)[1];
  const matchSplit = match.split('-');

  const theme = matchSplit[0];
  const backgroundColor = `#${matchSplit[1]}`;
  const imagePath = cardBackImages(path).default.src;
  const imageAlt = `Deck of cards with ${theme} theme.`;

  return { theme, backgroundColor, imagePath, imageAlt };
});

// DECKS
export const decks = cardFacesByTheme.map((cardGroup) => {
  const cardBack = cardBacks.find((back) => back.theme === cardGroup.theme);

  return { ...cardGroup, cardBack };
});
