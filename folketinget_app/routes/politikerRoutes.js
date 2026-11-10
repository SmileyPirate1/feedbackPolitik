const express = require('express');
const router = express.Router();
const politikerController = require('../controllers/politikerController.js');


router.get('/politikers', politikerController.getAllPolitiker)


module.exports = router;