const axios = require("axios");
const { TIMEOUT, ALGORITHM } = require("../config");
const isHealthy = require("../utils/healthCheck");

const roundRobin = require("../algorithms/roundRobin");
const leastConn = require("../algorithms/leastConnections");

const getServer =
      ALGORITHM === "least" ? leastConn : roundRobin;

module.exports = async (req, res) => {
      let server = getServer();

      let attempts = 0;

      while (!(await isHealthy(server)) && attempts < 3) {
            server = getServer();
            attempts++;
      }

      try {
            const response = await axios.get(`${server}/api`, {
                  timeout: TIMEOUT
            });

            res.json(response.data);
      } catch {
            res.status(500).send("All servers failed");
      }
};