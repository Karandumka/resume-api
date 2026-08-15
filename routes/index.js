const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth"));
router.use("/users", require("./users"));
router.use("/documents", require("./documents"));
router.use("/sections/:sectionId/items", require("./sectionItems"));
router.use("/templates", require("./templates"));
router.use("/ai", require("./ai"));
router.use("/ats", require("./ats"));
router.use("/tailoring", require("./tailoring"));
router.use("/export", require("./export"));
router.use("/share", require("./shares"));
router.use("/applications", require("./applications"));

module.exports = router;
