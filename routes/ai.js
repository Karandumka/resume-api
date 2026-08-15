const express = require("express");

const router = express.Router();

const {
    generateBullets,
    generateSummary,
    rewriteText,
    promptText
} = require("../controllers/aiController");

router.post("/bullets", generateBullets);

router.post("/summary", generateSummary);

router.post("/rewrite", rewriteText);

router.post("/prompt", promptText);

module.exports = router;
