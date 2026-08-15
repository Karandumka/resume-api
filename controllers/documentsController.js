const model = require("../models/resourceModel");

function getAllDocuments(req, res) {
    res.json(model.getAll("documents"));
}

function createDocument(req, res) {
    const document = model.create("documents", {
        id: model.getAll("documents").length + 1,
        title: req.body.title,
        type: req.body.type
    });

    res.status(201).json(document);
}

function getDocumentById(req, res) {
    const document = model.getById("documents", req.params.id);

    if (!document) return res.status(404).json({ message: "Document not found" });
    res.json(document);
}

function updateDocument(req, res) {
    const document = model.update("documents", req.params.id, req.body);

    if (!document) return res.status(404).json({ message: "Document not found" });
    res.json(document);
}

function deleteDocument(req, res) {
    if (!model.remove("documents", req.params.id)) {
        return res.status(404).json({ message: "Document not found" });
    }

    res.status(204).send();
}

function duplicateDocument(req, res) {
    const document = model.getById("documents", req.params.id);

    if (!document) return res.status(404).json({ message: "Document not found" });

    const duplicate = model.create("documents", {
        ...document,
        id: model.getAll("documents").length + 1,
        title: document.title + " Copy"
    });

    res.status(201).json(duplicate);
}

function importDocument(req, res) {
    const document = model.create("documents", {
        id: model.getAll("documents").length + 1,
        title: req.body.title || "Imported Document",
        type: req.body.type || "Resume"
    });

    res.status(201).json(document);
}

module.exports = { getAllDocuments, createDocument, getDocumentById, updateDocument, deleteDocument, duplicateDocument, importDocument };
