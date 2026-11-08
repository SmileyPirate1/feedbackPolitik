const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({

});


//Mongoose will save and pull information from this "FolketingsMedlemmer" collection.
//If no collection exits it will create it and you may have to refresh your db/connection to see it.
module.exports = mongoose.model('FolketingsMedlemmer', personSchema)