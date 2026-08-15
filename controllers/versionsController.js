const model = require("../models/resourceModel");

function getVersions(req, res) {
    res.json(model.getAll("versions").filter(item => item.documentId == req.params.documentId));
}

function createVersion(req, res) {
    const version = model.create("versions", {
        id: model.getAll("versions").length + 1,
        documentId: Number(req.params.documentId),
        name: req.body.name,
        content: req.body.content
    });

    res.status(201).json(version);
}

function getVersionById(req, res) {
    const version = model.getById("versions", req.params.id);
    if (!version) return res.status(404).json({ message: "Version not found" });
    res.json(version);
}

function restoreVersion(req, res) {
    const version = model.getById("versions", req.params.id);
    if (!version) return res.status(404).json({ message: "Version not found" });
    res.status(202).json({ message: "Version Restored", version });
}

module.exports = { getVersions, createVersion, getVersionById, restoreVersion };
