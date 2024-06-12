// Usage: put a bunch of png files into the sprites/ subdirectory and run.

import * as fs from 'fs';
import * as Spritesmith from 'spritesmith';

Spritesmith.run({
  src: fs.readdirSync('sprites').map(s => `sprites/${s}`),
  algorithm: 'binary-tree'
}, function handleResult (err, result) {
  // If there was an error, throw it
  if (err) {
    throw err;
  }

  // Output the image
  fs.mkdirSync('dist', {recursive: true});
  fs.writeFileSync('dist/sprites.png', result.image);
  fs.writeFileSync('dist/sprites.json', JSON.stringify(
    {coordinates: result.coordinates, properties: result.properties}));
});
