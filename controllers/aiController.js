function generateBullets(req, res) {
    res.status(202).json({ message: "Bullets Generated Successfully" });
}

function generateSummary(req, res) {
    res.status(202).json({ message: "Summary Generated Successfully" });
}

function rewriteText(req, res) {
    res.status(202).json({ message: "Text Rewritten Successfully" });
}

function promptText(req, res) {
    res.status(202).json({ message: "Prompt Applied Successfully" });
}

module.exports = { generateBullets, generateSummary, rewriteText, promptText };
