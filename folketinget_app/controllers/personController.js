const Person = require('../models/person.js');
const politikerService = require('../services/personService.js');

function handleError(res, error) {
    const status = error.status || 500;
    res.status(status).json({error: error.message});
}
exports.createPerson = async (req, res) => {
    try{
        const person = await Person(req.body);
        await politikerService.saveEntry(person);
        return res.status(201).json({person})
    } catch(err){
        handleError(res, err);
    }
}

exports.getAllPersons = async (req, res) => {
    const data = await politikerService.getAllPersoner()
    res.status(200).json({data});
}

exports.getOnePersonById = async (req, res) => {
    try {
        const entry = await politikerService.getEntryByid(req.params.id);
        res.status(200).json(entry);
    }catch(error){
        handleError(res, error);
    }
}

exports.updatePersonById = async (req, res) => {
    try{
        const entry = await politikerService.updateEntry(req.params.id, req.body);
        res.status(200).json({ status: 'entry has been updated', entry})
    }catch(error){
        handleError(res, error);
    }
}

exports.deletePersonById = async (req, res) => {
    try{
        await politikerService.deleteEntry(req.params.id);
        res.status(200).json({status: 'entry has been deleted'})
    }catch(error){
        handleError(res, error);
    }
}