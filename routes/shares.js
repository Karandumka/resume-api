const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require("../controllers/shareController");

router.post("/", controller.createShare);
router.get("/", controller.getShare);
router.delete("/", controller.deleteShare);

module.exports = router;
