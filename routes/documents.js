const express = require("express");
const router = express.Router();
const controller = require("../controllers/documentsController");

router.get("/", controller.getAllDocuments);
router.post("/", controller.createDocument);
router.post("/import", controller.importDocument);
router.get("/:id", controller.getDocumentById);
router.patch("/:id", controller.updateDocument);
router.post("/:id/duplicate", controller.duplicateDocument);
router.delete("/:id", controller.deleteDocument);
router.use("/:documentId/sections", require("./sections"));
router.use("/:documentId/versions", require("./versions"));
router.use("/:documentId/share", require("./shares"));

module.exports = router;
