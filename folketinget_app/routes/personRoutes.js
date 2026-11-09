const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController.js');
const {validateId} = require('../validators/validateId.js');

//NEEDS BODY VALIDATION, USE JOI thank you and goodbye.
router.post('/person', personController.createPerson);

//Does not need validation
router.get('/person', personController.getAllPersons);

router.get('/person/:id', validateId, personController.getOnePersonById);

router.put('/person/:id', validateId, personController.updatePersonById);

router.delete('/person/:id', validateId, personController.deletePersonById);

module.exports = router;