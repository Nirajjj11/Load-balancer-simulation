const axios = require('axios');

const TOTAL_REQUESTS = 1000;
const CONCURRENT_REQUESTS = 100;

const URL = 'http://localhost:4000';

async function sendBatch() {
      const requests = [];

      for (let i = 0; i < CONCURRENT_REQUESTS; i++) {
            requests.push(
                  axios.get(URL)
                        .then(res => res.data)
                        .catch(err => 'Error')
            );
      }

      return Promise.all(requests);
}

async function runLoadTest() {
      console.log(`🚀 Starting ${TOTAL_REQUESTS} requests...\n`);

      const start = Date.now();

      for (let i = 0; i < TOTAL_REQUESTS / CONCURRENT_REQUESTS; i++) {
            await sendBatch();
            console.log(`Batch ${i + 1} completed`);
      }

      const end = Date.now();

      console.log(`\n✅ Completed ${TOTAL_REQUESTS} requests`);
      console.log(`⏱️ Time taken: ${end - start} ms`);
}

runLoadTest();