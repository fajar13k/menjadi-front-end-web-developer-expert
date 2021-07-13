const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/heros/');
const destination = path.resolve(__dirname, 'dist/heros/');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach((image) => {
    // Prefix large
    sharp(`${target}/${image}`)
      .resize(1280)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.')
          .slice(0, -1)
          .join('.')}-large.jpg`,
      ));

    // Prefix medium
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.')
          .slice(0, -1)
          .join('.')}-medium.jpg`,
      ));

    // Prefix small
    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.')
          .slice(0, -1)
          .join('.')}-small.jpg`,
      ));
  });
