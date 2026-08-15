function tailorResume(req, res) {
    res.status(202).json({
        message: "Resume Tailoring Accepted"
    });
}

module.exports = { tailorResume };
