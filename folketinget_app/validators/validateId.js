const mongoose = require('mongoose');

//Validates the id to make sure the id is of mongoose db "style" otherwise when trying to get an id of 1, we crash.

exports.validateId = (req, res, next) => {
    if(!mongoose.isObjectIdOrHexString(req.params.id)) {
        return res.status(400).json({error: 'Invalid ID format'});
    }
    next();
}