const express = require("express");
const router = express.Router();
const { checkATS } = require("../controllers/atsController");

router.post("/check", checkATS);

module.exports = router;
