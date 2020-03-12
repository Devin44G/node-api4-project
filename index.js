const express = require('express');
const helmet  = require('helmet');
require('dotenv').config();

const server = express();

server.use(express.json());
server.use(helmet());

// MAIN SERVER ROUTE
server.get('/', (req, res) => {
  res.send(`
    <h2>Mistborn API</h2>
    <p>Welcome to the API for all your Mistborn API needs!</p>
    `);
});

// DEFINING AND LISTENING TO PORT 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`\n ** Lisenting on PORT:${PORT} ** \n`);
});
