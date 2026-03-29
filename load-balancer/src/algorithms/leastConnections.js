const servers = [
      { url: "http://localhost:3001", connections: 0 },
      { url: "http://localhost:3002", connections: 0 },
      { url: "http://localhost:3003", connections: 0 }
];

function getLeastConnectionServer() {
      servers.sort((a, b) => a.connections - b.connections);
      servers[0].connections++;
      return servers[0].url;
}

module.exports = getLeastConnectionServer;