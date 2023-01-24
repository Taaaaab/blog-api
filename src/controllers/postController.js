const { body, validationResult } = require('express-validator');

exports.index = (req, res) => {
    return res.render("index", {
    });
}
