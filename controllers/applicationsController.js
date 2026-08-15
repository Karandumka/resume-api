const model = require("../models/resourceModel");

function getApplications(req, res) {
    res.json(model.getAll("applications"));
}

function createApplication(req, res) {
    const application = model.create("applications", {
        id: model.getAll("applications").length + 1,
        company: req.body.company,
        status: req.body.status
    });

    res.status(201).json(application);
}

function updateApplication(req, res) {
    const application = model.update("applications", req.params.id, req.body);

    if (!application) return res.status(404).json({ message: "Application not found" });
    res.json(application);
}

function deleteApplication(req, res) {
    if (!model.remove("applications", req.params.id)) {
        return res.status(404).json({ message: "Application not found" });
    }

    res.status(204).send();
}

module.exports = { getApplications, createApplication, updateApplication, deleteApplication };
