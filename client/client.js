const axios = require("axios");

const TOTAL = 1000;

async function testLoad() {
      const requests = [];

      for (let i = 0; i < TOTAL; i++) {
            requests.push(
                  axios.get("http://localhost:4000/api")
                        .then(res => res.data)
                        .catch(() => "fail")
            );
      }

      const result = await Promise.all(requests);
      console.log("Completed:", result.length);
}

testLoad();