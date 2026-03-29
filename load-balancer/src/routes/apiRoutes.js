const express = require("express");
const router = express.Router();
const proxyRequest = require("../services/proxyService");

router.get("/api", proxyRequest);

module.exports = router;