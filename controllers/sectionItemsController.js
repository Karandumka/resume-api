const model = require("../models/resourceModel");

function getSectionItems(req, res) {
    res.json(model.getAll("sectionItems").filter(item => item.sectionId == req.params.sectionId));
}

function createSectionItem(req, res) {
    const item = model.create("sectionItems", {
        id: model.getAll("sectionItems").length + 1,
        sectionId: Number(req.params.sectionId),
        title: req.body.title,
        description: req.body.description
    });

    res.status(201).json(item);
}

function getSectionItemById(req, res) {
    const item = model.getById("sectionItems", req.params.id);
    if (!item) return res.status(404).json({ message: "Section item not found" });
    res.json(item);
}

function updateSectionItem(req, res) {
    const item = model.update("sectionItems", req.params.id, req.body);
    if (!item) return res.status(404).json({ message: "Section item not found" });
    res.json(item);
}

function deleteSectionItem(req, res) {
    if (!model.remove("sectionItems", req.params.id)) return res.status(404).json({ message: "Section item not found" });
    res.status(204).send();
}

module.exports = { getSectionItems, createSectionItem, getSectionItemById, updateSectionItem, deleteSectionItem };
