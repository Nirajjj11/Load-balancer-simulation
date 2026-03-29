const express = require("express");
const routes = require("./routes/apiRoutes");
const logger = require("./utils/logger");
const { PORT } = require("./config");

const app = express();

app.use(logger);
app.use("/", routes);

app.listen(PORT, () => {
      console.log(`Load Balancer running on ${PORT}`);
});