const { readData, writeData } = require("./dataModel");

function getAll(resource) {
    return readData()[resource];
}

function getById(resource, id) {
    return getAll(resource).find(item => item.id == id);
}

function create(resource, item) {
    const data = readData();
    data[resource].push(item);
    writeData(data);
    return item;
}

function update(resource, id, updates) {
    const data = readData();
    const item = data[resource].find(item => item.id == id);

    if (!item) return null;

    Object.assign(item, updates);
    writeData(data);
    return item;
}

function remove(resource, id) {
    const data = readData();
    const index = data[resource].findIndex(item => item.id == id);

    if (index === -1) return false;

    data[resource].splice(index, 1);
    writeData(data);
    return true;
}

module.exports = { getAll, getById, create, update, remove };
