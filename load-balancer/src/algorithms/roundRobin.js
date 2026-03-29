const servers = require("../../../config/servers");

let current = 0;

function getNextServer() {
      const server = servers[current];
      current = (current + 1) % servers.length;
      return server;
}

module.exports = getNextServer;