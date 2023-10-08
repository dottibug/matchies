// Webpack: create a context to require all images from specific folder instead of manually importing each one
const images = require.context('./images', true);

const imagePaths = images.keys().map((image) => images(image));

// TODO will need a card back image, too, per deck theme

const cards = imagePaths.map((path, i) => {
  const match = path.match(/\/static\/media\/(.*?)(\..*)?$/);

  const matchSplit = match[1].split('-');
  const theme = matchSplit[0];
  const name = matchSplit[1];
  const src = imagePaths[i];

  return { theme, name, src };
});

export const decks = cards.reduce((acc, card) => {
  const { theme, name, src } = card;

  // Find the theme in acc array that === card.theme
  const currentTheme = acc.find((a) => a.theme === card.theme);

  // If currentTheme is FOUND in acc array, add card to that theme's 'cards' array
  if (currentTheme) currentTheme.cards = [...currentTheme.cards, { name, src }];
  // If currentTheme is NOT found in acc array, add new entry to the acc array
  else acc = [...acc, { theme, cards: [{ name, src }] }];

  return acc;
}, []);
