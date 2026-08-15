const express = require("express");

const router = express.Router();

const {
    getProfile,
    updateProfile,
    deleteProfile
} = require("../controllers/usersController");

router.get("/me", getProfile);

router.put("/me", updateProfile);

router.delete("/me", deleteProfile);

module.exports = router;
