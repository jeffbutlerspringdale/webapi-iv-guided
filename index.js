require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 4000;


server.listen(port, () => {
  console.log(`\n*** Server Running on port ${port} ***\n`);
});

// when running locally the IP is takne care of my localhost
// and we can hardcode any old port over 3000

// when deploying
// heroku will assign an IP address
// cant hardcode in a port
// heroku needs to tell us which port
// because it might be taken

