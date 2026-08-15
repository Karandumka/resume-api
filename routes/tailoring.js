const express = require("express");
const router = express.Router();
const { tailorResume } = require("../controllers/tailoringController");

router.post("/", tailorResume);

module.exports = router;
