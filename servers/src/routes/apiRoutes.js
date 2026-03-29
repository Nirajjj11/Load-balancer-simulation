const express = require("express");
const router = express.Router();
const { getResponse } = require("../controllers/apiController");

router.get("/api", getResponse);

module.exports = router;