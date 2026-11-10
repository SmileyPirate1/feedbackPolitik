const express = require('express');
const app = express();
const morgan = require('morgan');
const personRoutes = require('./routes/personRoutes.js');
const portfolioRoutes = require('./routes/politikerRoutes.js');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler.js');
const mongoose = require("mongoose");
const path = require("path");
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(morgan('dev'));
app.use(express.json());
app.use(logger);
app.use('/api', personRoutes);
app.use('/api', portfolioRoutes);
app.use(errorHandler); //Should always be last, is for error 500, is a default if everything goes wrong.


//DB connection, if it cannot connect check if the name "folketingetDB" is correct
//127.0.0.1:27017. is for local Host.
//Can remove the .then it is mostly for testing.
mongoose.connect('mongodb://127.0.0.1:27017/folketingetDB')
    .then(() => console.log('MongoDB tilsluttet'))
    .catch(err => console.error('MongoDB fejl:', err));


module.exports = app;