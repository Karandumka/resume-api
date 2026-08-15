const { readData, writeData } = require("../models/dataModel");

function getProfile(req, res) {
    const data = readData();

    if (data.users.length === 0) {
        return res.status(404).json({ message: "No User Found" });
    }

    res.json(data.users[0]);
}

function updateProfile(req, res) {
    const data = readData();

    if (data.users.length === 0) {
        return res.status(404).json({ message: "No User Found" });
    }

    Object.assign(data.users[0], req.body);
    writeData(data);
    res.json(data.users[0]);
}

function deleteProfile(req, res) {
    const data = readData();

    if (data.users.length === 0) {
        return res.status(404).json({ message: "No User Found" });
    }

    data.users.splice(0, 1);
    writeData(data);
    res.status(204).send();
}

module.exports = { getProfile, updateProfile, deleteProfile };
