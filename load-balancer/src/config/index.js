require("dotenv").config();

module.exports = {
      PORT: process.env.PORT || 4000,
      ALGORITHM: process.env.ALGORITHM || "round",
      TIMEOUT: process.env.TIMEOUT || 2000
};