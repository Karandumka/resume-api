const express = require("express");

const router = express.Router();

const {
    getApplications,
    createApplication,
    updateApplication,
    deleteApplication
} = require("../controllers/applicationsController");

router.get("/", getApplications);

router.post("/", createApplication);

router.patch("/:id", updateApplication);

router.delete("/:id", deleteApplication);

module.exports = router;
