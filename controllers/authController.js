const { readData, writeData } = require("../models/dataModel");

function register(req, res) {
    const data = readData();
    const user = {
        id: data.users.length + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        tier: "free",
        aiUsage: 0
    };

    data.users.push(user);
    writeData(data);

    res.status(201).json({
        message: "User Registered Successfully",
        data: user
    });
}

function login(req, res) {
    res.status(200).json({
        message: "Login Successful",
        token: "sample-token"
    });
}

function logout(req, res) {
    res.status(204).send();
}

function forgotPassword(req, res) {
    res.status(202).json({ message: "Password Reset Link Sent" });
}

function resetPassword(req, res) {
    res.status(200).json({ message: "Password Reset Successful" });
}

module.exports = { register, login, logout, forgotPassword, resetPassword };
