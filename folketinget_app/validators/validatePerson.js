const joi = require('joi');

const schema= joi.object({
    name: joi.string().required(),
    parti: joi.string().required(),
    position: joi.string().required()
});


exports.validatePerson = (req, res, next) => {
    const {error} = schema.validate(req.body);

    if(error) {
        return res.status(400).json({error: error.details[0].message});
    }
    next();
}