/*
    Routes file, to work as a "routes switch",
    making it cleaner to use in index file
*/

const express = require('express');

const app = express.Router();

const rootRoute = require('./root');
app.use('/', rootRoute);

const pageRoute = require('./pageRoute');
app.use('/', pageRoute);

module.exports = app;