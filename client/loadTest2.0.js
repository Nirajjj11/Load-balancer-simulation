// better from loadText.js
const axios = require("axios");

const TOTAL = 1000;
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
      console.log("🚀 Starting load test...");

      for (let i = 0; i < TOTAL / BATCH_SIZE; i++) {
            await sendBatch();
            console.log(`Batch ${i + 1} done`);
      }

      console.log("✅ Completed");
}

start();