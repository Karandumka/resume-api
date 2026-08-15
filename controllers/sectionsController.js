const model = require("../models/resourceModel");

function getSections(req, res) {
    res.json(model.getAll("sections").filter(item => item.documentId == req.params.documentId));
}

function createSection(req, res) {
    const section = model.create("sections", {
        id: model.getAll("sections").length + 1,
        documentId: Number(req.params.documentId),
        name: req.body.name
    });

    res.status(201).json(section);
}

function getSectionById(req, res) {
    const section = model.getById("sections", req.params.id);
    if (!section) return res.status(404).json({ message: "Section not found" });
    res.json(section);
}

function updateSection(req, res) {
    const section = model.update("sections", req.params.id, req.body);
    if (!section) return res.status(404).json({ message: "Section not found" });
    res.json(section);
}

function deleteSection(req, res) {
    if (!model.remove("sections", req.params.id)) return res.status(404).json({ message: "Section not found" });
    res.status(204).send();
}

module.exports = { getSections, createSection, getSectionById, updateSection, deleteSection };
