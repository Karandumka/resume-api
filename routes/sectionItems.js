const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require("../controllers/sectionItemsController");

router.get("/", controller.getSectionItems);
router.post("/", controller.createSectionItem);
router.get("/:id", controller.getSectionItemById);
router.patch("/:id", controller.updateSectionItem);
router.delete("/:id", controller.deleteSectionItem);

module.exports = router;
