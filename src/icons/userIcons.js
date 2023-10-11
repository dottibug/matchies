// Webpack require.context: create a context to require all images from specific folder instead of manually importing each one

// ICON IMAGES
// Image filename format: icon-imageName.png
const images = require.context('./images', true);
const imagePaths = images.keys().map((image) => images(image));

export const icons = imagePaths.map((path, i) => {
  const match = path.match(/\/static\/media\/(.*?)(\..*)?$/);
  const matchSplit = match[1].split('-');
  const name = matchSplit[1];
  const image = imagePaths[i];
  return { name, image };
});
