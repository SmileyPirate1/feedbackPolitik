const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: { type: String, required: true, lowercase: true, trim: true, minlength: 3 },
    parti: { type: String, required: true, lowercase: true, trim: true, minlength: 1 },
    position: { type: String, required: true, lowercase: true, trim: true, minlength: 1, enum: ['minister', 'formand'] }
});


//Mongoose will save and pull information from this "FolketingsMedlemmer" collection.
//If no collection exits it will create it and you may have to refresh your db/connection to see it.
module.exports = mongoose.model('FolketingsMedlemmer', personSchema);