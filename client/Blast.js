// This is the blast mode Testing at the max level

const axios = require('axios');

const TOTAL_REQUESTS = 10000;

async function run() {
      const requests = [];
      

      for (let i = 0; i < TOTAL_REQUESTS; i++) {
            requests.push(axios.get('http://localhost:4000'));
      }

      await Promise.all(requests);

      console.log('🔥 1000 requests sent at once');
}

run();