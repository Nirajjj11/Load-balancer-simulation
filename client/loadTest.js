const axios = require('axios');

const TOTAL_REQUESTS = 1000;

async function sendRequests() {
      const requests = [];

      for (let i = 0; i < TOTAL_REQUESTS; i++) {
            requests.push(
                  axios.get('http://localhost:4000')
            );
      }

      await Promise.all(requests);

      console.log('✅ 1000 requests completed');
}

sendRequests();