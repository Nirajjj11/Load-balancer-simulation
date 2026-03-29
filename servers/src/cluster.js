const cluster = require("cluster");
const os = require("os");
const express = require("express");

if (cluster.isMaster) {
      const cpu = os.cpus().length;
      console.log(`Master running with ${cpu} CPUs`);

      for (let i = 0; i < cpu; i++) {
            cluster.fork();
      }
} else {
      const app = express();

      app.get("/api", (req, res) => {
            res.send(`Handled by worker ${process.pid}`);
      });

      app.listen(3001, () => {
            console.log(`Worker ${process.pid} running`);
      });
}