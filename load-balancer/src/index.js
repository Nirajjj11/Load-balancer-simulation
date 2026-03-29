const express = require('express');
const axios = require('axios');

const app = express();

const servers = [
      'http://localhost:3001',
      'http://localhost:3002',
      'http://localhost:3003'
];

let current = 0;

app.get('/', async (req, res) => {
      try {
            const server = servers[current];
            current = (current + 1) % servers.length;

            console.log(`Forwarding request to ${server}`);

            const response = await axios.get(server);

            res.send(response.data);

      } catch (error) {
            res.status(500).send('Server error');
      }
});

app.listen(4000, () => {
      console.log('Load Balancer running on 4000');
});