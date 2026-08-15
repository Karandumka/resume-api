function checkATS(req, res) {
    res.status(202).json({
        message: "ATS Check Accepted",
        score: 80
    });
}

module.exports = { checkATS };
