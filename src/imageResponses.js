const fs = require('fs');

const spange = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getSponge = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spange);
  response.end();
};

module.exports.getImage = getSponge;
