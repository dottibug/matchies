// Webpack require.context: create a context to require all images from specific folder instead of manually importing each one

// ICON IMAGES
// Image filename format: icon-imageName.png
const images = require.context('./images', true);
const imagePaths = images.keys().map((image) => image);

export const icons = imagePaths.map((path) => {
  const match = path.match(/-(.*)\.\w+$/);
  const name = match[1];
  const imagePath = images(path).default.src;
  return { name, imagePath };
});
