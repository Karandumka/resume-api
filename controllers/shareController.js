const model = require("../models/resourceModel");

function createShare(req, res) {
    const share = model.create("shares", {
        id: model.getAll("shares").length + 1,
        documentId: Number(req.params.documentId),
        public: true
    });

    res.status(201).json(share);
}

function getShare(req, res) {
    const share = model.getAll("shares").find(item => item.documentId == req.params.documentId);
    if (!share) return res.status(404).json({ message: "Share not found" });
    res.json(share);
}

function deleteShare(req, res) {
    const share = model.getAll("shares").find(item => item.documentId == req.params.documentId);
    if (!share) return res.status(404).json({ message: "Share not found" });
    model.remove("shares", share.id);
    res.status(204).send();
}

module.exports = { createShare, getShare, deleteShare };
