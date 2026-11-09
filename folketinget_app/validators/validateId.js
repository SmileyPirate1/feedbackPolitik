const mongoose = require('mongoose');

exports.validateId = (req, res, next) => {
    if(!mongoose.isObjectIdOrHexString(req.params.id)) {
        return res.status(400).json({error: 'Invalid ID format'});
    }
    next();
}