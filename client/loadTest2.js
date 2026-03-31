// better from loadText.js
const axios = require("axios");

const TOTAL = 1000;

const TOTAL_REQUESTS = 1000;
const BATCH_SIZE = 50;

async function sendBatch() {
      const requests = [];

      for (let i = 0; i < BATCH_SIZE; i++) {
            requests.push(
                  axios.get("http://localhost:4000/").catch(() => { })
            );
      }

      await Promise.all(requests);
}

async function start() {
      console.log(`🚀 Starting ${TOTAL_REQUESTS} requests...\n`);
      const start = Date.now();

      for (let i = 0; i < TOTAL_REQUESTS / BATCH_SIZE; i++) {
            await sendBatch();
            console.log(`Batch ${i + 1} done`);
      }
      const end = Date.now();
      console.log(`\n✅ Completed ${TOTAL_REQUESTS} requests`);
      console.log(`⏱️ Time taken: ${end - start} ms`);
}

start();