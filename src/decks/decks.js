// Webpack require.context: create a context to require all images from specific folder instead of manually importing each one

// HELPERS
const getMatchingPath = (path) => path.match(/\/static\/media\/(.*?)(\..*)?$/);

// CARD IMAGES
// Images must be named in the following format: themeName-imageName.png
const images = require.context('./images', true);
const imagePaths = images.keys().map((image) => images(image));

const cards = imagePaths.map((path, i) => {
  const match = getMatchingPath(path);
  const matchSplit = match[1].split('-');
  const theme = matchSplit[0];
  const name = matchSplit[1];
  const image = imagePaths[i];
  return { theme, name, image };
});

const cardFronts = cards.reduce((acc, card) => {
  const { theme, name, image } = card;
  // Find the theme in acc array that === card.theme
  const currentTheme = acc.find((a) => a.theme === card.theme);
  // If currentTheme is FOUND in acc array, add card to that theme's 'cards' array
  if (currentTheme) currentTheme.cards = [...currentTheme.cards, { name, image }];
  // If currentTheme is NOT found in acc array, add new entry to the acc array
  else acc = [...acc, { theme, cards: [{ name, image }] }];

  return acc;
}, []);

// CARD BACK IMAGES
// Images must be named in the following format: themeName-color.png
// The color must be a hex code without the hash: ffffff
const cardBackImages = require.context('./cardBacks', false);
const cardBackPaths = cardBackImages.keys().map((cardBack) => cardBackImages(cardBack));

const cardBacks = cardBackPaths.map((path, i) => {
  const match = getMatchingPath(path);
  const matchSplit = match[1].split('-');
  const theme = matchSplit[0];
  const backgroundColor = matchSplit[1];
  const image = cardBackPaths[i];
  return { theme, image, backgroundColor };
});

// DECKS
export const decks = cardFronts.map((card) => {
  // Find cardBack with same theme as cardFront
  const cardBack = cardBacks.find((back) => back.theme === card.theme);
  return { ...card, cardBack };
});
