const express = require("express");
const router = express.Router();
const { exportDocument } = require("../controllers/exportController");

router.post("/", exportDocument);

module.exports = router;
