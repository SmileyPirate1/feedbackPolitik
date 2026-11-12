const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController.js');
const {validateId} = require('../validators/validateId.js');
const {validatePerson} = require('../validators/validatePerson.js');

//Handles only the routing for communication with our database.

//Knows it's route, uses joi to validate basic parts of the req.body, then calls the controller.
router.post('/person', validatePerson, personController.createPerson);

//Does not need validation
router.get('/person', personController.getAllPersons);

//Validates the id using a mongoose library function before sending it to the controller.
router.get('/person/:id', validateId, personController.getOnePersonById);

router.put('/person/:id', validateId, personController.updatePersonById);

router.delete('/person/:id', validateId, personController.deletePersonById);

module.exports = router;