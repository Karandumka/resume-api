const model = require("../models/resourceModel");

function getTemplates(req, res) {
    res.json(model.getAll("templates"));
}

function getTemplateById(req, res) {
    const template = model.getById("templates", req.params.id);

    if (!template) return res.status(404).json({ message: "Template not found" });
    res.json(template);
}

module.exports = { getTemplates, getTemplateById };
