const express = require('express');
const router = express.Router();
const politikerController = require('../controllers/politikerController.js');

//Handles only the routeing for the 3rd parti API

router.get('/politikers', politikerController.getAllPolitiker)


module.exports = router;