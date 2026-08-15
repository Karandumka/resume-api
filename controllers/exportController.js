function exportDocument(req, res) {
    res.status(202).json({
        message: "Export Accepted",
        format: req.body.format || "pdf"
    });
}

module.exports = { exportDocument };
