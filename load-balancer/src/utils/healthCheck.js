const axios = require("axios");

module.exports = async function (server) {
      try {
            await axios.get(`${server}/api`);
            return true;
      } catch {
            return false;
      }
};