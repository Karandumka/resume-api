const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require("../controllers/versionsController");

router.get("/", controller.getVersions);
router.post("/", controller.createVersion);
router.get("/:id", controller.getVersionById);
router.post("/:id/restore", controller.restoreVersion);

module.exports = router;
